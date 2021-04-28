import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Page } from 'components';
import {
  Card,
  CardContent,
  Divider,
  Link,
  Typography
} from '@material-ui/core';
import { ForgotForm } from './components';
import { ChangeHistory } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2)
  },
  card: {
    width: theme.breakpoints.values.sm,
    maxWidth: '100%',
    overflow: 'unset',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
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
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  forgotForm: {
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
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textSub: {
    marginBottom: 25,
    fontWeight: 500,
    width: 260,
    fontSize: 20
  }
}));
const ForgotPassword = () => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Lupa Password">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <ChangeHistory className={classes.icon} />
          <Typography gutterBottom variant="h3">
            Lupa Password
          </Typography>
          <Typography variant="subtitle2">
            Email Reset akan Dikirimkan
          </Typography>
          <ForgotForm className={classes.forgotForm} />
          <Divider className={classes.divider} />
          <div className={classes.links}>
            <Link
              align="center"
              color="secondary"
              component={RouterLink}
              to="/auth/login"
              underline="always"
              variant="subtitle2">
              Masuk
            </Link>
            <Link
              align="center"
              color="secondary"
              component={RouterLink}
              to="/auth/register"
              underline="always"
              variant="subtitle2">
              Daftar
            </Link>
          </div>
        </CardContent>
      </Card>
    </Page>
  );
};

export default ForgotPassword;
