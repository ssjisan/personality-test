import React from "react";
import { Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Container
      sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", p:4 }}
    >
      <Typography
        sx={{
          fontWeight: 400,
          fontDize: "16px",
          color: "#ACACAC",
          lineHeight: "19px",
        }}
      >
        Copyright © 2023 fact. All rights reserved.
      </Typography>
    </Container>
  );
}
