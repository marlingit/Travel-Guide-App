import { createContext, useContext, useState } from "react";

let SurveyContext = createContext(null);

export const SurveyProvider = ({ children }) => {
  const [surveyList, setSurveyList] = useState([]);

  const submitAnswer = (questionId, answerId) => {
    let changed = false;
    setSurveyList(
      surveyList.map((question) => {
        if (question.id === questionId) {
          changed = true;
          return { ...question, answerId: answerId };
        }
        return question;
      }),
    );
    if (!changed) {
      setSurveyList([...surveyList, { id: questionId, answerId: answerId }]);
    }
    console.log(surveyList);
  };

  const getAnswer = (questionId) => {
    return surveyList.find((q) => q.id === questionId)?.answerId;
  };

  const resetList = () => {
    setSurveyList([]);
  };

  return (
    <SurveyContext.Provider
      value={{
        surveyList: surveyList,
        submitAnswer,
        getAnswer,
        resetList,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = () => {
  return useContext(SurveyContext);
};
