import React, { createContext, useState } from "react";
import data from "../Assets/Data.json";

export const DataStore = createContext();
export default function MarksStore({ children }) {
   // eslint-disable-next-line
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
    setButton(data);
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
    setButton();
  };
  const handleFinish = () => {
    countResult();
  };
  return (
    <DataStore.Provider
      value={{
        question,
        currentQuestionNo,
        button,
        handleClick,
        handleNextQuestion,
        handleFinish,
        extraversion,
        agreeableness,
        conscientiousness,
        neuroticism,
        openness,
      }}
    >
      {children}
    </DataStore.Provider>
  );
}
