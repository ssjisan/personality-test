import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Background from "../bg.png";

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
      <Box
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Card
          style={{
            maxWidth: 1000,
            padding: "2%",
            background: "rgba( 255, 255, 255, 0.2 )",
            backdropFilter: "blur( 20px )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h4" style={{ fontWeight: "bold",marginBottom:"15px"}}>
                Big Five Personality Test
              </Typography>
              <Typography variant="body1" style={{ color: "#484848",marginBottom:"5px"}}>
                Know how you are as a human being
              </Typography>
              <Typography variant="body1" style={{ color: "#484848",marginBottom:"15px"}}>
                This test contains 50 statements. There is no time limit.Most
                people take about 5 minutes - please allow yourself plenty of
                time.
              </Typography>
              <Link to="/Questions">
                <Button variant="outlined">Lets's Start</Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <img src="https://i.ibb.co/DLKPckz/People-and-emotions-concept-icons-set-with-laugh-and-anger-symbols-flat-isolated-vector-illustration.jpg" style={{maxWidth:"100%"}}/>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
}
