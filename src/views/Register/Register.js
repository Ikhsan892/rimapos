import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Grid,
  Typography
} from '@material-ui/core';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import validate from 'validate.js';
import clsx from 'clsx';
import { Page } from 'components';
import { RegisterRightForm, RegisterLeftForm } from './components';
import useRouter from 'utils/useRouter';

const schema = {
  namaBisnis: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  telepon: {
    numericality: true,
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 7
    }
  },
  typeBusiness: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  negara: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  alamat: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 5
    }
  },
  owner: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  kelamin: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  }
};

const useStyles = makeStyles(theme => ({
  rotForm: {},
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 160
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'unset',
    paddingTop: 80,
    paddingBottom: 20,
    position: 'relative'
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  },
  link: {
    marginLeft: 35,
    paddingBottom: 40
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
  const { history } = useRouter();
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(formState.values);
    history.push('/');
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <Page className={classes.root} title="Daftarkan Bisnismu">
      <Card className={classes.card}>
        <Typography gutterBottom variant="h2" align="center">
          Daftarkan Bisnismu
        </Typography>
        <Typography variant="subtitle2" align="center">
          Gratis Tanpa Biaya
        </Typography>
        <form className={clsx(classes.rootForm)} onSubmit={handleSubmit}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <AssignmentTurnedIn className={classes.icon} />
                <RegisterLeftForm
                  className={classes.registerForm}
                  hasError={hasError}
                  setFormState={setFormState}
                  formState={formState}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <RegisterRightForm
                  className={classes.registerForm}
                  hasError={hasError}
                  setFormState={setFormState}
                  formState={formState}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              className={classes.submitButton}
              color="primary"
              disabled={!formState.isValid}
              size="large"
              type="submit"
              variant="contained">
              Create account
            </Button>
          </CardActions>
        </form>
        <Link
          align="center"
          color="secondary"
          className={classes.link}
          component={RouterLink}
          to="/auth/login"
          underline="always"
          variant="subtitle2">
          Sudah Punya Akun?
        </Link>
      </Card>
    </Page>
  );
};

export default Register;
