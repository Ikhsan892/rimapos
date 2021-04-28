import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  FormHelperText,
  TextField,
  FormControl,
  InputLabel,
  Select
} from '@material-ui/core';
import axios from 'axios';

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
  policyCheckbox: {
    marginLeft: '-14px'
  }
}));

const RegisterLeftForm = props => {
  const { hasError, setFormState, formState } = props;

  const classes = useStyles();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      await axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          setCountries(response.data);
        })
        .catch(err => {
          alert('something error');
        });
    };
    fetchCountry();
  }, []);

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
        error={hasError('namaBisnis')}
        helperText={
          hasError('namaBisnis') ? formState.errors.namaBisnis[0] : null
        }
        label="Nama Bisnis"
        name="namaBisnis"
        onChange={handleChange}
        fullWidth
        value={formState.values.namaBisnis || ''}
        variant="outlined"
      />
      <TextField
        error={hasError('telepon')}
        helperText={hasError('telepon') ? formState.errors.telepon[0] : null}
        label="Nomor Telepon"
        name="telepon"
        fullWidth
        onChange={handleChange}
        value={formState.values.telepon || ''}
        variant="outlined"
      />
      <FormControl
        className={classes.formControl}
        variant="outlined"
        shrink
        fullWidth>
        <InputLabel htmlFor="typeBusiness">Tipe Bisnis</InputLabel>
        <Select
          native
          label="Tipe Bisnis"
          name="typeBusiness"
          shrink
          error={hasError('typeBusiness')}
          onChange={handleChange}
          value={formState.values.typeBusiness}
          inputProps={{ name: 'typeBusiness', id: 'typeBusiness' }}>
          <option value=""></option>
          <option value="retail">Retail</option>
          <option value="restoran" disabled>
            Restoran
          </option>
        </Select>
        {hasError('typeBusiness') && (
          <FormHelperText error>
            {formState.errors.typeBusiness[0]}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl
        className={classes.formControl}
        variant="outlined"
        shrink
        fullWidth>
        <InputLabel htmlFor="negara">Negara</InputLabel>
        <Select
          native
          label="Negara"
          error={hasError('negara')}
          shrink
          onChange={handleChange}
          inputProps={{ name: 'negara', id: 'negara' }}>
          <option value="" disabled>
            Pilih Negaramu
          </option>
          {countries &&
            countries.map(country => (
              <option value={country.name}>{country.name}</option>
            ))}
        </Select>
        {hasError('negara') && (
          <FormHelperText error>{formState.errors.negara[0]}</FormHelperText>
        )}
      </FormControl>
      <TextField
        error={hasError('alamat')}
        fullWidth
        helperText={hasError('alamat') ? formState.errors.alamat[0] : null}
        multiline
        rows={5}
        label="Alamat"
        name="alamat"
        onChange={handleChange}
        value={formState.values.alamat || ''}
        variant="outlined"
      />
    </div>
  );
};

RegisterLeftForm.propTypes = {
  className: PropTypes.string
};

export default RegisterLeftForm;
