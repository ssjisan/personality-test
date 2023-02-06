import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

export default function Navbar() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "64px",
          background: "#FFFFFF",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <img src="Assets/Logo.png" alt="logo" />
          </Box>
          <Box sx={{ display: "flex", gap: 4 }}>
            <Typography
              sx={{ fontWeight: 400, fontSize: "16px", color: "#BFC3C8" }}
            >
              About
            </Typography>
            <Typography
              sx={{ fontWeight: 400, fontSize: "16px", color: "#BFC3C8" }}
            >
              Result
            </Typography>
            <Typography
              sx={{ fontWeight: 400, fontSize: "16px", color: "#BFC3C8" }}
            >
              Team
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
