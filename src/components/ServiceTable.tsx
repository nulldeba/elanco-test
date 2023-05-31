import React, { useEffect, useMemo, useState } from "react";
import { Grid, Typography, styled, Paper, Button } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
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
          <Button
            variant="text"
            onClick={() => {
              setSelectedRow(data);
              setIsServiceTable(false);
            }}
          >
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

  useEffect(() => {
    // This is added for some ag-grid defect
    window.addEventListener("error", (e) => {
      if (e.message === "ResizeObserver loop limit exceeded") {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);
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
              width: "100%",
            }}
          >
            <div
              style={{
                height: "500px",
                // maxWidth: "1110px",
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
