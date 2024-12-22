import { useNavigate } from "react-router-dom";
import surveyQuestions from "@/data/survey-questions.json";
import "material-symbols";
import { useState, memo } from "react";
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
};

export const Questions = () => {
  const { question, setQuestion, nextQuestion, previousQuestion, viewResults } =
    useSurvey();
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
          <div className="mx-auto flex max-w-max flex-col items-center">
            <h2 className="mb-8 text-center text-2xl font-bold">
              {surveyQuestion.question}
            </h2>
            <form
              className="flex w-full flex-col space-y-1 self-start"
              onSubmit={handleSubmit}
            >
              {surveyQuestion.options.map((option) => (
                <div
                  key={option.id}
                  className="flex flex-row items-baseline rounded-md border border-transparent bg-primary hover:border-secondary-border hover:bg-secondary"
                >
                  <input
                    id={option.id}
                    value={option.id}
                    {...inputProps}
                    className="ml-2 cursor-pointer accent-accent"
                  />
                  <label
                    htmlFor={option.id}
                    className="size-full cursor-pointer py-2 pl-2 pr-4 text-xl"
                  >
                    {option.text}
                  </label>
                </div>
              ))}
              <label>
                <input type="radio" /> Hello
              </label>
              <footer className="flex justify-between pt-14">
                <PreviousButton isFirstQuestion={isFirstQuestion} />
                <NextButton isLastQuestion={isLastQuestion} />
              </footer>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

const PreviousButton = memo(function PreviousButton({ isFirstQuestion }) {
  if (isFirstQuestion) {
    return (
      <button type="submit" className="inline-block px-8 py-4 rounded-full bg-secondary-border text-text font-semibold text-lg text-nowrap cursor-not-allowed" disabled>
        Previous Question
      </button>
    );
  }

  return <button type="submit" className="inline-block px-8 py-4 rounded-full bg-accent-dark text-white font-semibold text-lg hover:bg-accent text-nowrap ">Previous Question</button>;
});

const NextButton = memo(function NextButton({ isLastQuestion }) {
  if (isLastQuestion) {
    return <button type="submit" className="inline-block px-8 py-4 rounded-full bg-accent-dark text-white font-semibold text-lg hover:bg-accent text-nowrap ">View Results</button>;
  }

  return <button type="submit" className="inline-block px-8 py-4 rounded-full bg-accent-dark text-white font-semibold text-lg hover:bg-accent text-nowrap ">Next Question</button>;
});
