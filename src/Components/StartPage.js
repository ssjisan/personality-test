import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Background from "../bg.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function StartPage() {
  const container = useRef(null);
  const forBelow600 = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Assets/start.json"),
    });
  }, []);
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
          height: forBelow600 ? "95vh" : "90vh",
          justifyContent: "center",
          alignItems: "center",
          padding: "2%",
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
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography
                variant="h4"
                style={{ fontWeight: "bold", marginBottom: "15px" }}
              >
                Big Five Personality Test
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "#484848", marginBottom: "5px" }}
              >
                Know how you are as a human being
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "#484848", marginBottom: "15px" }}
              >
                This test contains 50 statements. There is no time limit.Most
                people take about 5 minutes - please allow yourself plenty of
                time.
              </Typography>
              <Link to="/Questions" style={{ textDecoration: "none" }}>
               <Button variant="contained" style={{borderRadius:"50px"}}>Start</Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              {/* <Box ref={container} style={{maxWidth: '100%'}}></Box> */}
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
}
