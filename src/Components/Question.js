import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import data from "../Question/Data.json";
import Background from "../background.jpg";
export default function Question() {
  const [question, setQuestion] = useState(data);
  const [count, setCount] = useState(0);
  const [state, setState] = useState("");
  const [button, setButton] = useState("");
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const [extraversion, setExtraversion] = useState(0);
  const [agreeableness, setAgreeableness] = useState(0);
  const [conscientiousness, setConscientiousness] = useState(0);
  const [neuroticism, setNeuroticism] = useState(0);
  const [openness, setOpenness] = useState(0);
  const handleClick = (category, scale, data) => {
    setState(category);
    setButton(data)
    let value = 0;
    if (scale === 1) {
      if (data === "Very Inaccurate") {
        value = value + 5;
      }
      if (data === "Moderately Inaccurate") {
        value = value + 4;
      }
      if (data === "Neither Accurate Nor Inaccurate") {
        value = value + 3;
      }
      if (data === "Moderately Accurate") {
        value = value + 2;
      }
      if (data === "Very Accurate") {
        value = value + 1;
      }
    }
    if (scale === -1) {
      if (data === "Very Inaccurate") {
        value = value + 1;
      }
      if (data === "Moderately Inaccurate") {
        value = value + 2;
      }
      if (data === "Neither Accurate Nor Inaccurate") {
        value = value + 3;
      }
      if (data === "Moderately Accurate") {
        value = value + 4;
      }
      if (data === "Very Accurate") {
        value = value + 5;
      }
    }
    setCount(value);
  };
  const countResult = () => {
    switch (state) {
      case "extraversion":
        setExtraversion(+count + extraversion);
        break;
      case "agreeableness":
        setAgreeableness(+count + agreeableness);
        break;
      case "conscientiousness":
        setConscientiousness(+count + conscientiousness);
        break;
      case "neuroticism":
        setNeuroticism(+count + neuroticism);
        break;
      case "openness":
        setOpenness(+count + openness);
        break;
      default:
    }
  };

  const handleNextQuestion = () => {
    countResult();
    const nextQuestion = currentQuestionNo + 1;
    setCurrentQuestionNo(nextQuestion);
  };
  const handleFinish = () => {
    countResult();
  };
  console.log(
    "extraversion",
    extraversion,
    "agreeableness",
    agreeableness,
    "neuroticism",
    neuroticism,
    "openness",
    openness,
    "conscientiousness",
    conscientiousness
  );
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
      <Box style={{display: "flex",height: "100vh", justifyContent: "center", alignItems: "center",alignContent:"center"}}>
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
      >
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} md={8} lg={8}>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", color: "#fff" }}
            >
              Q{question[currentQuestionNo].id}/50
            </Typography>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", color: "#fff" }}
            >
              {question[currentQuestionNo].question}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            {question[currentQuestionNo].options.map((data, i) => (
              <Box
                key={i}
                style={{
                  border: "1px solid lightgray",
                  padding: "2%",
                  borderRadius: "10px",
                  marginBottom: "5px",
                  cursor: "pointer",
                  maxWidth: "100%",
                  backgroundColor: button === data && "white",
                }}
                onClick={() =>
                  handleClick(
                    question[currentQuestionNo].category,
                    question[currentQuestionNo].scale,
                    data
                  )
                }
              >
                <Typography style={{ color: button === data ? "black" : "#fff"}}>{data}</Typography>
              </Box>
            ))}
            <Box>
              {currentQuestionNo < question.length - 1 ? (
                <Button onClick={handleNextQuestion} style={{ color: "#fff" }}>
                  Next Question
                </Button>
              ) : (
                <Button onClick={handleFinish}>Finish</Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Card>
      </Box>
    </Box>
  );
}
