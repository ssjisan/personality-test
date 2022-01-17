import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Background from "../background.jpg";

export default function StartPage() {
  return (
    <Box
      style={{
        backgroundImage: `url(${Background})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#cccccc",
      }}
    >
      <Card style={{ maxWidth: 1000 }}>
        <Grid container>
          <Grid item lg={6}>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              Personality Test
            </Typography>
            <Link to="/Questions"><Button variant="outlined"></Button></Link>
          </Grid>
          <Grid item lg={6}></Grid>
        </Grid>
      </Card>
    </Box>
  );
}
