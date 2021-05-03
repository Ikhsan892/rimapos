import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Page } from 'components';
import { Header, ScanBarcode, BeforeCheckout } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  margin: {
    marginBottom: theme.spacing(3)
  }
}));

const Kasir = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Kasir">
      <Header />
      <ScanBarcode className={classes.margin} />
      <BeforeCheckout />
    </Page>
  );
};

export default Kasir;
