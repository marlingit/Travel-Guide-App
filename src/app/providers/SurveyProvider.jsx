import { createContext, useContext, useState } from "react";
import surveyQuestions from "@/data/survey-questions.json";

let SurveyContext = createContext(null);

export const SurveyProvider = ({ children }) => {
  const [surveyDict, setSurveyDict] = useState({});

  const surveyLength = surveyQuestions.length;

  const submitAnswer = (question, answer) => {
    setSurveyDict((prev) => {
      return {
        ...prev,
        [question]: answer,
      };
    });
    console.log(surveyDict);
  };

  const getAnswer = (question) => {
    return surveyDict[question];
  };

  const nextQuestion = (answer) => {
    if (question === surveyLength) {
      return;
    }
    submitAnswer(answer);
    setQuestion((prev) => prev + 1);
  };

  const previousQuestion = (answer) => {
    if (question === 1) {
      return;
    }
    submitAnswer(answer);
    setQuestion((prev) => prev - 1);
  };

  const viewResults = (answer) => {
    submitAnswer(answer);
    console.log("View Results");
    console.log(surveyDict);
  };

  return (
    <SurveyContext.Provider
      value={{
        surveyDict,
        submitAnswer,
        getAnswer,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = () => {
  return useContext(SurveyContext);
};
