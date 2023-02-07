import React, { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";

export default function ProgressBar() {
  // eslint-disable-next-line
  const [progress, setProgress] = useState(10);
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            "& .MuiLinearProgress-bar1Determinate": {
              backgroundColor: "#4278EB",
            },
            height: "20px",
            backgroundColor: "#EEF3FF",
            borderRadius: "4px",
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          sx={{ fontSize: "20px", fontWeight: 400, color: "#686868" }}
        >
          {progress}
        </Typography>
      </Box>
    </Box>
  );
}
