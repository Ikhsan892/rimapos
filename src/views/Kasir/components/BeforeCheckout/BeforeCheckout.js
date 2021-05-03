import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  addIcon: {
    marginRight: theme.spacing(1)
  },
  done: {
    textDecoration: 'line-through',
    color: theme.palette.text.secondary
  }
}));

const BeforeCheckout = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            action={
              <Button color="primary" size="small">
                <Add className={classes.addIcon} />
                Hapus Semua
              </Button>
            }
            title="Daftar Barang"
          />
          <Divider />
          <CardContent>{/* Table */}</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default BeforeCheckout;
