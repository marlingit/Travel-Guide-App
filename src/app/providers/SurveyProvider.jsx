import { createContext, useContext } from 'react';

let SurveyContext = createContext(null);

export const SurveyProvider = ({ children }) => {
  const [question, setQuestion] = useState(null);

  return (
    <SurveyContext.Provider value={{ question, setQuestion }}>
      {children}
    </SurveyContext.Provider>
  );
}

export const useSurvey = () => {
  return useContext(SurveyContext);
};

