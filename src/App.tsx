import React, { useEffect, useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ColGroupDef, Grid, GridOptions } from "ag-grid-community";
import "ag-grid-enterprise";
import "./App.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface cloudData {
  Date?: Date;
  InstanceId?: any;
  Location?: string;
  MeterCategory?: string;
  ResourceGroup?: string;
  ResourceLocation?: string;
  ServiceName?: string;
  ConsumedQuantity?: string;
  Cost?: string;
  // Tags : {selectedRow.Tags.app-name} , {selectedRow.Tags.environment}, {selectedRow.Tags.business-unit}

  UnitOfMeasure?: any;
}

const App = () => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const [filter, setFilter] = useState("");
  const [categoryValue, setCategoryValue] = useState("Select");
  const [selectedRow, setSelectedRow] = useState<cloudData>({});
  const [categoryOptions, setCategoryOptions] = useState(["Select"]);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState<any[]>([]);
  const [columnDefs] = useState<ColDef[]>([
    { field: "Date", sortable: true, filter: true },
    { field: "Cost", sortable: true, filter: "agSetColumnFilter" },
    { field: "ServiceName", sortable: true, filter: true },
    {
      field: "Tags.app-name",
      headerName: "Applications",
      sortable: true,
      filter: true,
    },
    {
      field: "",
      headerName: "View",
      cellRenderer: ({ data }: any) => {
        return <button onClick={() => setSelectedRow(data)}> view</button>;
      },
    },
  ]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 200,
      resizable: true,
      // floatingFilter: true,
    };
  }, []);

  useEffect(() => {
    // fetch("https://engineering-task.elancoapps.com/api/resources")
    //   .then((result) => result.json())
    //   .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">Elanco Test App</header> */}
      <div>
        <select
          onChange={async (event) => {
            setFilter(event.target.value);
            if (event.target.value === "select") {
              setCategoryOptions(["Select"]);
            }
            await fetch(
              `https://engineering-task.elancoapps.com/api/${event.target.value}`
            )
              .then((result) => result.json())
              .then((data) => {
                setCategoryOptions(["Select", ...data]);
              });
          }}
        >
          <option value="select">Select your filter</option>
          <option value="resources">Resources</option>
          <option value="applications">Applications</option>
        </select>
        <select
          onChange={async (event) => {
            setCategoryValue(event.target.value);
            await fetch(
              `https://engineering-task.elancoapps.com/api/${filter}/${event.target.value}`
            )
              .then((result) => result.json())
              .then((data) => {
                setRowData(data);
              });
          }}
          value={categoryValue}
        >
          {categoryOptions.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div style={containerStyle}>
        <div style={{ height: 500, width: 800, boxSizing: "border-box" }}>
          <div style={gridStyle} className="ag-theme-alpine">
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
            />
          </div>
        </div>
      </div>
      <div>
        {" "}
        Details of the services on date:
        <p>
          ConsumedQuantity : {selectedRow.ConsumedQuantity} <br />
          Cost : {selectedRow.Cost} <br />
          Date : {selectedRow.Date} <br />
          InstanceId : {selectedRow.InstanceId} <br />
          Location : {selectedRow.Location} <br />
          MeterCategory : {selectedRow.MeterCategory} <br />
          ResourceGroup : {selectedRow.ResourceGroup} <br />
          ResourceLocation : {selectedRow.ResourceLocation} <br />
          ServiceName : {selectedRow.ServiceName}
          <br />
          {/* Tags : {selectedRow.Tags.app - name} , {selectedRow.Tags.environment},{" "}
          {selectedRow.Tags.business - unit} */}
          UnitOfMeasure : {selectedRow.UnitOfMeasure}
        </p>
      </div>
    </div>
  );
};

export default App;
