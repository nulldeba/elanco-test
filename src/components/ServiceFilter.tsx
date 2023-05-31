import React, { useState } from "react";
import {
  Card,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

const ServiceFilter = ({ setRowData }: any) => {
  const [filter, setFilter] = useState("");
  const [categoryValue, setCategoryValue] = useState("Select");
  const [categoryOptions, setCategoryOptions] = useState<any[]>([
    "Select category type",
  ]);
  return (
    <Card variant="outlined" style={{ padding: "70px", margin: "70px" }}>
      <Typography gutterBottom variant="h5" component="div">
        Cloud Services
      </Typography>
      <div className="form-field">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Select filter type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Select  filter type"
            onChange={async (event: SelectChangeEvent) => {
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
            <MenuItem value="resources">resources</MenuItem>
            <MenuItem value="applications">applications</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="form-field">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Select your category type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categoryValue}
            label="Select your category type"
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
          >
            {categoryOptions.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Card>
  );
};

export default ServiceFilter;
