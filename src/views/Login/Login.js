import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Link
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { Page } from 'components';
import { LoginForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2)
  },
  card: {
    width: theme.breakpoints.values.md,
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
  loginForm: {
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

const Login = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Masuk ke Rima POS">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <LockIcon className={classes.icon} />
          <Typography gutterBottom variant="h3">
            Masuk
          </Typography>
          <Typography variant="subtitle2">Untuk Mengatur Semua</Typography>
          <LoginForm className={classes.loginForm} />
          <Divider className={classes.divider} />
          <div className={classes.links}>
            <Link
              align="center"
              color="secondary"
              component={RouterLink}
              to="/auth/register"
              underline="always"
              variant="subtitle2">
              Tidak punya akun? Daftar Gratis!
            </Link>
            <Link
              align="center"
              color="secondary"
              component={RouterLink}
              to="/auth/login"
              underline="always"
              variant="subtitle2">
              Lupa Password
            </Link>
          </div>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="/images/auth.png"
          title="Cover">
          <Typography
            color="inherit"
            variant="subtitle1"
            className={classes.textSub}>
            Atur dan Kembangkan Bisnismu dengan Mudah
          </Typography>
          {/* <div className={classes.person}>
            <Avatar
              alt="Person"
              className={classes.avatar}
              src="/images/avatars/avatar_2.png"
            />
            <div>
              <Typography color="inherit" variant="body1">
                Ekaterina Tankova
              </Typography>
              <Typography color="inherit" variant="body2">
                Manager at inVision
              </Typography>
            </div>
          </div> */}
        </CardMedia>
      </Card>
    </Page>
  );
};

export default Login;
