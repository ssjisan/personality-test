import { Box, Container } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import ProgressBar from "../Components/ProgressBar";
import Timer from "../Components/Timer";

export default function TestStart() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Navbar />
      <Container>
        <Box
          sx={{
            mt: 8,
          }}
        >
          <Timer />
          <ProgressBar />
        </Box>
      </Container>
    </Box>
  );
}
