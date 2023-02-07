import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <Container sx={{ height: "100%" }}>
      <Grid container spacing={3} sx={{ mt: 8 }}>
        <Grid item xs={12} sm={6} md={6} sx={{ mt: 4 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 5 }}>
            <Typography
              sx={{ fontSize: "48px", fontWeight: 600, color: "#032E50" }}
            >
              Discover Your True Personality with <br />
              <span style={{ color: "#4278EB" }}>Big Five Test</span>
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontDize: "16px",
                color: "#ACACAC",
                lineHeight: "19px",
              }}
            >
              Discover Your Inner Self with Our Free and Open Personality Test.
              Unlock Your True Character Traits in Just 10 Minutes with 120
              Insightful Questions
            </Typography>
          </Box>
          <Box>
            <Link to="/test" style={{ textDecoration: "none" }}>
              <Button variant="contained" sx={{ backgroundColor: "#4278EB" }}>
                Explore Your Personality
              </Button>
            </Link>
            <Box sx={{ display: "flex", gap: 5, mt: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CheckCircleOutlineRoundedIcon sx={{ color: "#4278EB" }} />{" "}
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontDize: "16px",
                    color: "#ACACAC",
                    lineHeight: "19px",
                  }}
                >
                  No registration required
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CheckCircleOutlineRoundedIcon sx={{ color: "#4278EB" }} />{" "}
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontDize: "16px",
                    color: "#ACACAC",
                    lineHeight: "19px",
                  }}
                >
                  Free & Scientific
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img src="Assets/hero.png" alt="hero" />
        </Grid>
      </Grid>
    </Container>
  );
}
