// eslint-disable-next-line
import { Box, Container } from "@mui/material";
import React from "react";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";

export default function HomePage() {
  return (
    <Box sx={{ height: "100vh", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
      <Navbar />
      <HeroSection/>
      <Footer />
    </Box>
  );
}
