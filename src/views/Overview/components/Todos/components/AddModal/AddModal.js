import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddModal({ open, handleClose }) {
  return (
    <div>
      <Dialog
        open={open}
        disableBackdropClick={true}
        fullWidth={true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">To do</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Buat Rencana Pekerjaanmu dengan Mudah
          </DialogContentText>
          <TextField
            autoFocus
            variant="outlined"
            style={{ marginBottom: 10 }}
            id="todo"
            label="Nama Pekerjaan"
            fullWidth
          />
          <TextField
            shrink
            autoFocus
            variant="outlined"
            id="tenggat"
            label="Tenggat Waktu"
            type="date"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
