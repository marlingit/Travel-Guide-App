import { useSurvey } from "@/app/providers/SurveyProvider";
import surveyQuestions from "@/data/survey-questions.json";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Results = () => {
  const { surveyList, resetList } = useSurvey();
  const navigate = useNavigate();

  return (
    <main role="main">
      <section className="pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-[4vw]">
          <header className="flex flex-col items-center justify-center">
            <h1 className="mb-2 text-center text-clamp-4xl-6xl font-bold">
              Results
            </h1>
          </header>
        </div>
      </section>
      {surveyList.map((question) => {
        const surveyQuestion = surveyQuestions.find(
          (q) => q.id === question.id,
        );
        return (
          <section key={question.id}>
            <div className="mx-auto max-w-7xl px-[4vw] pt-2">
              <div className="mx-auto flex max-w-max flex-col items-center">
                <h1 className="mb-2 text-center text-xl font-bold text-text-light">
                  Question {question.id}
                </h1>
                <h2 className="mb-8 text-center text-2xl font-bold">
                  {surveyQuestion.question}
                </h2>
                <form className="flex w-full flex-col space-y-1 self-start">
                  {surveyQuestion.options.map((option) => {
                    return (
                      <div
                        key={option.id}
                        className="flex flex-row items-baseline rounded-md bg-slate-200 has-[:checked]:ring-4 has-[:checked]:ring-inset has-[:checked]:ring-accent"
                      >
                        <label className="size-full py-2 pl-2 pr-4 text-xl">
                          <input
                            type="radio"
                            name="option"
                            value={option.id}
                            checked={question.answerId === option.id}
                            className="ml-2"
                            disabled
                          />
                          {option.text}
                        </label>
                      </div>
                    );
                  })}
                </form>
              </div>
            </div>
          </section>
        );
      })}
      <section>
        <div className="mx-auto max-w-7xl px-[4vw] py-16">
          <footer className="flex flex-row justify-between">
            <button onClick={window.print} className="inline-block text-nowrap rounded-full bg-accent-dark px-8 py-4 text-lg font-semibold text-white hover:bg-accent">Print Results</button>
            <button
              onClick={() => {
                resetList();
                navigate("/");
              }}
              className="inline-block text-nowrap rounded-full bg-accent-dark px-8 py-4 text-lg font-semibold text-white hover:bg-accent"
            >
              Return to Main Page
            </button>
          </footer>
        </div>
      </section>
    </main>
  );
};
