import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ServiceDetails from "../src/components/ServiceDetails";
import ServiceTable from "../src/components/ServiceTable";
import ServiceFilter from "./components/ServiceFilter";
import "./App.css";

interface cloudData {
  Date?: any;
  InstanceId?: any;
  Location?: string;
  MeterCategory?: string;
  ResourceGroup?: string;
  ResourceLocation?: string;
  ServiceName?: string;
  ConsumedQuantity?: string;
  Cost?: string;
  UnitOfMeasure?: any;
}

const App = () => {
  const [selectedRow, setSelectedRow] = useState<any>({});
  const [rowData, setRowData] = useState<any[]>([]);

  useEffect(() => {
    // fetch("https://engineering-task.elancoapps.com/api/resources")
    //   .then((result) => result.json())
    //   .then((data) => console.log(data));
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{}}>
          <div className="App">
          
            <ServiceFilter setRowData={setRowData} />
            <ServiceTable rowData={rowData} setSelectedRow={setSelectedRow} />
            <ServiceDetails selectedRow={selectedRow} />
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
