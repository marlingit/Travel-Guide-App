import { useNavigate } from "react-router-dom";
import { LinkButton } from "@/components/ui/link-button";
import { Button } from "@/components/ui/button";
import surveyQuestions from "@/data/survey-questions.json";
import "material-symbols";
import { useState } from "react";
import { useSurvey } from "@/app/providers/SurveyProvider";

const useRadioButtons = (name) => {
  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const inputProps = {
    name,
    type: "radio",
    onChange: handleChange,
  };

  return { value, inputProps };
}

export const Questions = () => {
  const { question, setQuestion, nextQuestion, previousQuestion, viewResults } = useSurvey();
  const { value, inputProps } = useRadioButtons("option");
  const navigate = useNavigate();
  

  const surveyQuestion = surveyQuestions.find((q) => q.id === question);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.value === "next") {
      nextQuestion(value);
    } else if (e.nativeEvent.submitter.value === "previous") {
      previousQuestion(value);
    } else if (e.nativeEvent.submitter.value === "view-results") {
      viewResults(value);
      navigate("results");
    }
  };

  const isFirstQuestion = question <= 1;
  const isLastQuestion = question >= surveyQuestions.length;

  return (
    <main role="main">
      <section className="pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-[4vw]">
          <header className="flex flex-col items-center justify-center">
            <h1 className="mb-2 text-center text-xl font-bold text-text-light">
              Question {question}
            </h1>
          </header>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl px-[4vw] pt-2">
          <div className="flex flex-col items-center max-w-max mx-auto">
            <h2 className="mb-8 text-center text-2xl font-bold">
              {surveyQuestion.question}
            </h2>
            <form className="flex flex-col self-start space-y-1 w-full" onSubmit={handleSubmit}>
              {surveyQuestion.options.map((option) => (
                <div
                  key={option.id}
                  className="flex flex-row items-baseline bg-primary border border-transparent rounded-md hover:bg-secondary hover:border-secondary-border"
                >
                  <input
                    id={option.id}
                    value={option.id}
                    {...inputProps}
                    className="ml-2 cursor-pointer accent-accent"
                  />
                  <label htmlFor={option.id} className="text-xl cursor-pointer size-full py-2 pr-4 pl-2">{option.text}</label>
                </div>
              ))}
              <label><input type="radio" /> Hello</label>
              <footer className="flex justify-between pt-14">
                <button type="submit" value="previous">
                  Previous Question
                </button>
                {isLastQuestion ?
                <button type="submit" value="view-results">
                  View Results
                </button> :
                <button type="submit" value="next">
                  Next Question
                </button>
                }
              </footer>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};


