import { Box, Tooltip } from "@mui/material";
import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { DataStore } from "./MarksStore";

export default function Result() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const {
    extraversion,
    agreeableness,
    conscientiousness,
    neuroticism,
    openness,
  } = useContext(DataStore);
  console.log(extraversion,
    agreeableness,
    conscientiousness,
    neuroticism,
    openness,);
  return (
    <Box
      style={{
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
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
        <ResponsiveContainer height={450} width="100%">
          <BarChart
            width="100%"
            height="100%"
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis style={{ textTransform: "uppercase" }} dataKey="stageName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="You" fill="#00756A" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
