import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
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
  const [rowData, setRowData] = useState<cloudData[]>([]);
  const [isServiceTable, setIsServiceTable] = useState(true);

 
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{}}>
          <div className="App">
            <ServiceFilter setRowData={setRowData} />
            <Card style={{ padding: "20px" }} variant="outlined">
              {isServiceTable ? (
                <ServiceTable
                  rowData={rowData}
                  setSelectedRow={setSelectedRow}
                  setIsServiceTable={setIsServiceTable}
                />
              ) : (
                <ServiceDetails
                  selectedRow={selectedRow}
                  setIsServiceTable={setIsServiceTable}
                />
              )}
            </Card>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
