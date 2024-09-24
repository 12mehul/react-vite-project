import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { IFormObject } from "./ParentCrud";

interface IFormPageProps {
  open: boolean;
  handleClose: Function;
  setData: Function;
}

const initialValues = {
  firstName: "",
  lastName: "",
};

export default function FormDialog(props: IFormPageProps) {
  const [formObj, setFormObj] = useState<IFormObject>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormObj({ ...formObj, [name]: value });
  };

  const saveInfo = () => {
    props.setData(formObj);
    setFormObj(initialValues);
    props.handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={() => {
          props.handleClose();
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>To please enter your name.</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="firstName"
            name="firstName"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            value={formObj.firstName}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="lastName"
            name="lastName"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            value={formObj.lastName}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              props.handleClose();
            }}
          >
            Cancel
          </Button>
          <Button type="button" onClick={saveInfo}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
