import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  number: {
    '&::-webkit-inner-spin-button': {
      webkitAppearance: 'none',
      margin: 0
    }
  }
}));

const NumberInput = () => {
  const classes = useStyles();
  return <TextField name="number" type="number" className={classes.number} />;
};

export default NumberInput;
