import React, { useState } from "react";
import { Button } from "@mui/material";
import FormDialog from "./FormDialog";
import DisplayGridCrud from "./DisplayGridCrud";
import { IGridArray } from "../../interface/IGridCrud";

export default function ParentCrud() {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<IGridArray[]>([]);
  const [id, setId] = useState<number>(-1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (id: number) => {
    setId(id);
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    const prevData = [...data];
    const newData = prevData.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <div className="m-10 flex flex-col gap-5 justify-center">
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <FormDialog
        open={open}
        handleClose={handleClose}
        setData={setData}
        data={data}
        id={id}
        setId={setId}
      />
      <DisplayGridCrud
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
