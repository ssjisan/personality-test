import { Box, Button, Card, Grid, Typography, Container } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataStore } from "./MarksStore";
import Navbar from "./Navbar";
export default function Question() {
  const {
    question,
    currentQuestionNo,
    button,
    handleClick,
    handleNextQuestion,
    handleFinish,
  } = useContext(DataStore);
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
    <Box sx={{ height: "100vh" }}>
      <Navbar />
      <Container>
        <Box>
          <Typography
            sx={{ fontSize: "20px", fontWeight: 400, color: "#686868" }}
          >{`${time.minutes}:${String(time.seconds).padStart(
            2,
            "0"
          )}`}</Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            padding: "2%",
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
          >
            <Grid container spacing={10}>
              <Grid item xs={12} sm={6} md={8} lg={8}>
                <Typography
                  variant="h4"
                  style={{ fontWeight: "bold", color: "#444" }}
                >
                  Q{question[currentQuestionNo].id}/50
                </Typography>
                <Typography variant="h6" style={{ color: "#444" }}>
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
                      backgroundColor: button === data && "#00adff40",
                    }}
                    onClick={() =>
                      handleClick(
                        question[currentQuestionNo].category,
                        question[currentQuestionNo].scale,
                        data
                      )
                    }
                  >
                    <Typography
                      style={{ color: button === data ? "#444" : "#444" }}
                    >
                      {data}
                    </Typography>
                  </Box>
                ))}
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "20px",
                  }}
                >
                  {currentQuestionNo < question.length - 1 ? (
                    <Box>
                      {button ? (
                        <Button
                          variant="contained"
                          onClick={handleNextQuestion}
                          style={{ backgroundColor: "#444", color: "#fff" }}
                        >
                          Next
                        </Button>
                      ) : (
                        <Button
                          disabled
                          variant="outlined"
                          onClick={handleNextQuestion}
                          style={{}}
                        >
                          Next
                        </Button>
                      )}
                    </Box>
                  ) : (
                    <Link to="/Results">
                      <Button onClick={handleFinish}>Finish</Button>
                    </Link>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
