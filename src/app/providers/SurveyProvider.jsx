import { createContext, useContext, useState } from 'react';
import surveyQuestions from "@/data/survey-questions.json";

let SurveyContext = createContext(null);

export const SurveyProvider = ({ children }) => {
  const [question, setQuestion] = useState(1);
  const [responseCollection, setResponseCollection] = useState([]);

  const surveyLength = surveyQuestions.length;
  
  const submitAnswer = (surveyResponse) => {
    const matchingResponse = responseCollection.find((response) => response.question === question);
    if (matchingResponse) {
      matchingResponse.answer = surveyResponse;
      console.log(responseCollection);
      return;
    }

    responseCollection.push({
      question: question,
      answer: surveyResponse,
    });
    console.log(responseCollection);
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
    console.log(responseCollection);
  }


  return (
    <SurveyContext.Provider value={{ question, setQuestion, nextQuestion, previousQuestion, viewResults, answerArray: responseCollection }}>
      {children}
    </SurveyContext.Provider>
  );
}

export const useSurvey = () => {
  return useContext(SurveyContext);
};

