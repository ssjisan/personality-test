import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";

export default function StartPage() {
  return (
    <Box>
      <Card style={{ maxWidth: 1000 }}>
        <Grid container>
          <Grid item lg={6}>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              Personality Test
            </Typography>
            <Button variant="outlined"></Button>
          </Grid>
          <Grid item lg={6}></Grid>
        </Grid>
      </Card>
    </Box>
  );
}
