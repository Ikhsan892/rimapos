import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  FormHelperText,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';
// policy: {
//   presence: { allowEmpty: false, message: 'is required' },
//   checked: true
// }

const useStyles = makeStyles(theme => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  policy: {
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  }
}));

const RegisterRightForm = props => {
  const { hasError, setFormState, formState } = props;

  const classes = useStyles();

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  return (
    <div className={classes.fields}>
      <TextField
        error={hasError('owner')}
        helperText={hasError('owner') ? formState.errors.owner[0] : null}
        label="Nama Pemilik"
        fullWidth
        name="owner"
        onChange={handleChange}
        value={formState.values.owner || ''}
        variant="outlined"
      />
      <FormControl component="fieldset">
        <FormLabel component="legend"></FormLabel>
        <RadioGroup
          aria-label="kelamin"
          name="kelamin"
          value={formState.values.kelamin}
          type="radio"
          row
          onChange={handleChange}>
          <FormControlLabel
            value="perempuan"
            control={<Radio color="primary" />}
            label="Perempuan"
          />
          <FormControlLabel
            value="laki-laki"
            control={<Radio />}
            label="Laki-Laki"
          />
        </RadioGroup>
        {hasError('kelamin') && (
          <FormHelperText error>{formState.errors.kelamin[0]}</FormHelperText>
        )}
      </FormControl>
      <TextField
        error={hasError('email')}
        fullWidth
        helperText={hasError('email') ? formState.errors.email[0] : null}
        label="Email"
        name="email"
        onChange={handleChange}
        value={formState.values.email || ''}
        variant="outlined"
      />
      <TextField
        error={hasError('password')}
        fullWidth
        helperText={hasError('password') ? formState.errors.password[0] : null}
        label="Password"
        name="password"
        onChange={handleChange}
        type="password"
        value={formState.values.password || ''}
        variant="outlined"
      />
      {/* <div>
          <div className={classes.policy}>
            <Checkbox
              checked={formState.values.policy || false}
              className={classes.policyCheckbox}
              color="primary"
              name="policy"
              onChange={handleChange}
            />
            <Typography color="textSecondary" variant="body1">
              I have read the{' '}
              <Link
                color="secondary"
                component={RouterLink}
                to="#"
                underline="always"
                variant="h6">
                Terms and Conditions
              </Link>
            </Typography>
          </div>
          {hasError('policy') && (
            <FormHelperText error>{formState.errors.policy[0]}</FormHelperText>
          )}
        </div> */}
    </div>
  );
};

RegisterRightForm.propTypes = {
  className: PropTypes.string
};

export default RegisterRightForm;
