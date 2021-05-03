import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  colors,
  Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Label } from 'components';
import React, { useState, useEffect } from 'react';
import axios from 'utils/axios';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 700
  }
}));

const Piutang = () => {
  const classes = useStyles();
  const [piutang, setPiutang] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchPiutang = () => {
      axios.get('/api/piutang').then(response => {
        if (mounted) {
          setPiutang(response.data.utang);
        }
      });
    };

    fetchPiutang();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="subtitle1" className={classes.title}>
            Daftar Piutang
          </Typography>
        }
      />
      <CardContent>
        <List component="nav" aria-label="transaksi">
          {piutang &&
            piutang.map((utang, index) => {
              return (
                <div key={utang.id}>
                  {index < 1 ? <Divider key={utang.id} /> : null}
                  <ListItem button key={utang.id}>
                    <ListItemText primary={utang.pelanggan} />
                    <ListItemSecondaryAction>
                      <Label color={colors.red[800]}>Rp {utang.total},-</Label>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </div>
              );
            })}
        </List>
      </CardContent>
    </Card>
  );
};

export default Piutang;
