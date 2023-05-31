import React, { useMemo, useState } from "react";
import { Card, Grid, Typography, styled, Paper, Button } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ColGroupDef, GridOptions } from "ag-grid-community";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const ServiceTable = ({ rowData, setSelectedRow, setIsServiceTable }: any) => {
  const [columnDefs] = useState<ColDef[]>([
    {
      field: "Date",
      sortable: true,
      filter: true,
      cellStyle: { textAlign: "left" },
    },
    {
      field: "Cost",
      sortable: true,
      filter: true,
      cellStyle: { textAlign: "left" },
    },
    {
      field: "ServiceName",
      sortable: true,
      filter: true,
      cellStyle: { textAlign: "left" },
    },
    {
      field: "Tags.app-name",
      headerName: "Applications",
      sortable: true,
      filter: true,
      cellStyle: { textAlign: "left" },
    },
    {
      field: "",
      headerName: "View",
      cellRenderer: ({ data }: any) => {
        return (
            <Button variant="text" onClick={() => {
                setSelectedRow(data)
                setIsServiceTable(false)
            }}>
            View
          </Button>
        );
      },
    },
  ]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 200,
      resizable: true,
    };
  }, []);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Grid>
        <Typography gutterBottom variant="h5" component="div">
          Services Details
        </Typography>
        <Grid item xs={12}>
          <Item
            style={{
              boxShadow: " 0px 0px 0px",
            }}
          >
            <div
              style={{
                height: "500px",
                maxWidth: "inherit",
              }}
              className="ag-theme-alpine"
            >
              <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
              />
            </div>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceTable;
