import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  IconButton
} from '@material-ui/core';
import { Add, RemoveCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import React from 'react';
import { NumberInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1150
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
          <CardContent>
            <PerfectScrollbar>
              <div className={classes.inner}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="subtitle1">
                          Minyak Goreng Sania
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <NumberInput />
                      </TableCell>
                      <TableCell>
                        <Typography variant="subtitle1">Rp 20.000,-</Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton>
                          <RemoveCircle />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="subtitle1">
                          Minyak Goreng Sania
                        </Typography>
                      </TableCell>
                      <TableCell>test</TableCell>
                      <TableCell>
                        <Typography variant="subtitle1">Rp 20.000,-</Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton>
                          <RemoveCircle />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </PerfectScrollbar>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default BeforeCheckout;
