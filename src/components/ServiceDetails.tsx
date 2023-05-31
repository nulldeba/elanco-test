import React from "react";
import { Button, Grid, Typography, styled, Paper } from "@mui/material";

const ServiceDetails = ({ selectedRow, setIsServiceTable }: any) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      {Object.keys(selectedRow).length > 0 ? (
        <Grid container>
          <Grid item xs={12}>
            <Button
              variant="text"
              onClick={() => {
                setIsServiceTable(true);
              }}
            >
              Back to Services table
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="div">
              Details of the services on date: {selectedRow.Date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "end",
              }}
            >
              ConsumedQuantity:
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "start",
              }}
            >
              {selectedRow.ConsumedQuantity}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "end",
              }}
            >
              Cost :
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "start",
              }}
            >
              {selectedRow.Cost}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "end",
              }}
            >
              InstanceId :
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "start",
              }}
            >
              {selectedRow.InstanceId}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "end",
              }}
            >
              Location :
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "start",
              }}
            >
              {selectedRow.Location}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "end",
              }}
            >
              MeterCategory :
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "start",
              }}
            >
              {selectedRow.MeterCategory}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "end",
              }}
            >
              ResourceGroup :
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "start",
              }}
            >
              {selectedRow.ResourceGroup}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "end",
              }}
            >
              ResourceLocation :
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "start",
              }}
            >
              {selectedRow.ResourceLocation}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "end",
              }}
            >
              ServiceName :
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "start",
              }}
            >
              {selectedRow.ServiceName}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "end",
              }}
            >
              UnitOfMeasure :
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                boxShadow: " 0px 0px 0px",
                textAlign: "start",
              }}
            >
              {selectedRow.UnitOfMeasure}
            </Item>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </>
  );
};

export default ServiceDetails;
