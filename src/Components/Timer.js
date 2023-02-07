import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";

export default function Timer() {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        const nextSeconds = prevTime.seconds + 1;
        const nextMinutes = prevTime.minutes + (nextSeconds >= 60 ? 1 : 0);
        return {
          minutes: nextMinutes % 60,
          seconds: nextSeconds % 60,
        };
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Box>
      <Typography
        sx={{ fontSize: "20px", fontWeight: 400, color: "#686868" }}
      >{`${time.minutes}:${String(time.seconds).padStart(2, "0")}`}</Typography>
    </Box>
  );
}
