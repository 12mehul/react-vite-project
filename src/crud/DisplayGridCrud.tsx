import React from "react";
import { IDisplay } from "../interface/IGridCrud";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Card } from "@mui/material";

export default function DisplayGridCrud(props: IDisplay) {
  const columns: GridColDef[] = [
    { field: "firstName", headerName: "FIRSTNAME", width: 150 },
    { field: "lastName", headerName: "LASTNAME", width: 150 },
    {
      field: "",
      headerName: "ACTION",
      width: 300,
      renderCell: (params) => (
        <Card
          sx={{
            margin: "2px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => props.handleEdit(params.row.id)}
          >
            EDIT
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => props.handleDelete(params.row.id)}
          >
            DELETE
          </Button>
        </Card>
      ),
    },
  ];

  return (
    <div className="m-3">
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={props.data} columns={columns} />
      </div>
    </div>
  );
}
