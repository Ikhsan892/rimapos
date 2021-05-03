import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Switch,
  TextField
} from '@material-ui/core';
import { Send } from '@material-ui/icons';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  sendIcon: {
    marginLeft: theme.spacing(3)
  }
}));

const ScanBarcode = () => {
  const classes = useStyles();

  const [isBarcode, setIsBarcode] = useState(false);

  const handleChange = () => setIsBarcode(!isBarcode);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      color="primary"
                      checked={isBarcode}
                      onChange={handleChange}
                      name="isBarcode"
                    />
                  }
                  label="Scan barcode"
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={12} md={7} lg={9}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label={isBarcode ? 'Masukkan Barcode' : 'Nama Barang'}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={5} lg={3}>
                    <Button variant="contained" color="secondary" size="large">
                      Enter <Send className={classes.sendIcon} />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ScanBarcode;
