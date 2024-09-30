import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { IFormObject, IFormPageProps } from "../../interface/IGridCrud";

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

  useEffect(() => {
    if (props.id > 0) {
      const existingRecord = props.data.find((v) => v.id == props.id);
      if (existingRecord) {
        setFormObj({ ...existingRecord });
      }
    } else {
      setFormObj(initialValues);
    }
  }, [props.id, props.data]);

  const saveInfo = () => {
    const prevData = [...props.data];
    if (props.id <= 0) {
      // Generate a unique ID based on the highest existing ID
      const newId =
        prevData.length > 0
          ? Math.max(...prevData.map((item) => item.id)) + 1
          : 1;
      prevData.push({ ...formObj, id: newId });
    } else {
      const updatedData = prevData.find((v) => v.id == props.id);
      if (updatedData) {
        // Only update if the object exists
        updatedData.firstName = formObj.firstName;
        updatedData.lastName = formObj.lastName;
      }
    }
    props.setData(prevData);
    props.setId(-1);
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
        <DialogTitle>
          {props.id > 0 ? "Edit Details" : "Add Details"}
        </DialogTitle>
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
