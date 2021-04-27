import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Link,
  Grid,
  Typography
} from '@material-ui/core';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import { Page } from 'components';
import { RegisterForm, RegisterLeftForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    padding: theme.spacing(3, 2, 2, 11)
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'unset',
    paddingTop: 80,
    position: 'relative'
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  icon: {
    backgroundColor: '#2D42FF',
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    zIndex: 999,
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  registerForm: {
    marginTop: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  person: {
    marginTop: theme.spacing(2),
    display: 'flex'
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Register = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Daftarkan Bisnismu">
      <Card className={classes.card}>
        <Typography gutterBottom variant="h2" align="center">
          Daftarkan Bisnismu
        </Typography>
        <Typography variant="subtitle2" align="center">
          Gratis Tanpa Biaya
        </Typography>
        <CardContent>
          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <AssignmentTurnedIn className={classes.icon} />
              <RegisterLeftForm className={classes.registerForm} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <RegisterForm className={classes.registerForm} />
            </Grid>
          </Grid>
          <Link
            align="center"
            color="secondary"
            component={RouterLink}
            to="/auth/login"
            underline="always"
            variant="subtitle2">
            Sudah Punya Akun?
          </Link>
        </CardContent>
        <CardActions>
          <Button
            className={classes.submitButton}
            color="primary"
            size="large"
            type="submit"
            variant="contained">
            Create account
          </Button>
        </CardActions>
        <Divider className={classes.divider} />
      </Card>
    </Page>
  );
};

export default Register;
