import { Box, Card } from "@mui/material";
import React, { useContext } from "react";
import Background from "../background.jpg";
import { DataStore } from "./MarksStore";
export default function Result() {
    const {extraversion,agreeableness,conscientiousness, neuroticism, openness}=useContext(DataStore)
    console.log(extraversion,openness,agreeableness,conscientiousness, neuroticism)
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
            width: 1000,
            padding: "2%",
            background: "rgba( 255, 255, 255, 0.2 )",
            backdropFilter: "blur( 20px )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        ></Card>
      </Box>
    </Box>
  );
}
