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

const Transaksi = () => {
  const classes = useStyles();
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchStoks = () => {
      axios.get('/api/stock/menipis').then(response => {
        if (mounted) {
          setStocks(response.data.stocks);
        }
      });
    };

    fetchStoks();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="subtitle1" className={classes.title}>
            Stok yang Menipis
          </Typography>
        }
      />
      <CardContent>
        <List component="nav" aria-label="transaksi">
          {stocks &&
            stocks.map((stock, index) => {
              return (
                <div key={stock.id}>
                  {index < 1 ? <Divider key={stock.id} /> : null}
                  <ListItem button key={stock.id}>
                    <ListItemText primary={stock.nama_barang} />
                    <ListItemSecondaryAction>
                      <Label color={colors.orange[800]}>
                        {stock.total_barang} {stock.satuan_barang}
                      </Label>
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

export default Transaksi;
