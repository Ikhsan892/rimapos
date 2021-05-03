import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import {
  Header,
  Piutang,
  Statistics,
  // Notifications,
  // Projects,
  Todos,
  Transaksi
} from './components';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  statistics: {
    marginTop: theme.spacing(3)
  },
  notifications: {
    marginTop: theme.spacing(6)
  },
  projects: {
    marginTop: theme.spacing(6)
  },
  todos: {
    marginTop: theme.spacing(6)
  },
  boxx: {
    marginTop: theme.spacing(6)
  }
}));

const Overview = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Overview">
      <Header />
      <Statistics className={classes.statistics} />
      {/* <Notifications className={classes.notifications} />
      <Projects className={classes.projects} /> */}
      <Grid
        container
        spacing={3}
        direction="row"
        justify="space-between"
        className={classes.boxx}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Transaksi />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Piutang />
        </Grid>
      </Grid>
      <Todos className={classes.todos} />
    </Page>
  );
};

export default Overview;
