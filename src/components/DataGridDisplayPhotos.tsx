import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IPhotos } from "../interface/IPhotos";
import axios from "axios";
import { Card, CardMedia } from "@mui/material";

export default function DataGridDisplayPhotos() {
  const [data, setData] = useState<IPhotos[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "title", headerName: "TITLE", width: 300 },
    {
      field: "url",
      headerName: "URL",
      width: 200,
      renderCell: (params) => (
        <Card
          sx={{
            margin: "2px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={params.value}
            alt="URL Image"
            style={{ width: 100, height: 100 }}
          />
        </Card>
      ),
    },
    {
      field: "thumbnailUrl",
      headerName: "THUMBNAIL",
      width: 200,
      renderCell: (params) => (
        <Card
          sx={{
            margin: "2px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={params.value}
            alt="Thumbnail Image"
            style={{ width: 100, height: 100 }}
          />
        </Card>
      ),
    },
  ];

  return (
    <div className="m-3">
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid rows={data} columns={columns} getRowId={(row) => row.id} />
      </div>
    </div>
  );
}
