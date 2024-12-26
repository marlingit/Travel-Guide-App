import { useNavigate } from "react-router-dom";
import surveyQuestions from "@/data/survey-questions.json";
import "material-symbols";
import { useState, memo } from "react";
import { useSurvey } from "@/app/providers/SurveyProvider";

export const Survey = () => {
  const [question, setQuestion] = useState(1);


  const { submitAnswer, getAnswer } =
    useSurvey();

  const surveyQuestion = surveyQuestions.find((q) => q.id === question);
  const selectedAnswer = getAnswer(question);
  console.log(selectedAnswer);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);

    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    submitAnswer(question, formJson.answer);
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
              method="post"
            >
              {surveyQuestion.options.map((option) => (
                <div
                  key={option.id}
                  className="flex flex-row items-baseline rounded-md border border-transparent bg-primary hover:border-secondary-border hover:bg-secondary"
                >
                  <label
                    htmlFor={option.id}
                    className="size-full cursor-pointer py-2 pl-2 pr-4 text-xl"
                  >
                    <input
                      id={option.id}
                      value={option.id}
                      name="answer"
                      type="radio"
                      className="ml-2 cursor-pointer accent-accent"
                    />
                    {option.text}
                  </label>
                </div>
              ))}
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
      <button
        type="submit"
        value="previous"
        className="inline-block cursor-not-allowed text-nowrap rounded-full bg-secondary-border px-8 py-4 text-lg font-semibold text-text"
        disabled
      >
        Previous Question
      </button>
    );
  }

  return (
    <button
      type="submit"
      value="previous"
      className="inline-block text-nowrap rounded-full bg-accent-dark px-8 py-4 text-lg font-semibold text-white hover:bg-accent"
    >
      Previous Question
    </button>
  );
});

const NextButton = memo(function NextButton({ isLastQuestion }) {
  if (isLastQuestion) {
    return (
      <button
        type="submit"
        value="results"
        className="inline-block text-nowrap rounded-full bg-accent-dark px-8 py-4 text-lg font-semibold text-white hover:bg-accent"
      >
        View Results
      </button>
    );
  }

  return (
    <button
      type="submit"
      value="next"
      className="inline-block text-nowrap rounded-full bg-accent-dark px-8 py-4 text-lg font-semibold text-white hover:bg-accent"
    >
      Next Question
    </button>
  );
});
