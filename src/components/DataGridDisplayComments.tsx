import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IComments } from "../interface/IComments";
import axios from "axios";

export default function DataGridDisplayComments() {
  const [data, setData] = useState<IComments[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "NAME", width: 150 },
    { field: "email", headerName: "EMAIL", width: 150 },
  ];

  return (
    <div className="m-3">
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={data} columns={columns} />
      </div>
    </div>
  );
}
