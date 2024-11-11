import { createContext, useContext, useState } from 'react';
import surveyQuestions from "@/data/survey-questions.json";

let SurveyContext = createContext(null);

export const SurveyProvider = ({ children }) => {
  const [question, setQuestion] = useState(1);

  const surveyLength = surveyQuestions.length;

  const submitAnswer = (answer) => {
    const found = answerArray.find((item) => item.question === question);
    if (found) {
      found.answer = answer;
      return;
    }

    answerArray.push({
      question: question,
      answer: answer,
    });
  }

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
    console.log(answerArray);
  }

  const answerArray = [];

  return (
    <SurveyContext.Provider value={{ question, setQuestion, nextQuestion, previousQuestion, viewResults, answerArray }}>
      {children}
    </SurveyContext.Provider>
  );
}

export const useSurvey = () => {
  return useContext(SurveyContext);
};

