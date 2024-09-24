import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormDialog from "./FormDialog";
import DisplayGridCrud from "./DisplayGridCrud";

export interface IFormObject {
  firstName: string;
  lastName: string;
}

export default function ParentCrud() {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<IFormObject[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addNewData = (newData: IFormObject) => {
    setData((prevData) => [...prevData, newData]);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="m-10 flex flex-col gap-5 justify-center">
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <FormDialog open={open} handleClose={handleClose} setData={addNewData} />
      {data && <DisplayGridCrud data={data} />}
    </div>
  );
}
