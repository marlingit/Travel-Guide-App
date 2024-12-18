import { useSurvey } from "@/app/providers/SurveyProvider";
import surveyQuestions from "@/data/survey-questions.json";
import { Link } from "react-router-dom";


export const Results = () => {
  const { answerArray } = useSurvey();
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
      {
        answerArray.map((item) => {
          const surveyQuestion = surveyQuestions.find((q) => q.id === item.question);
          return (
            <section key={item.question}>
              <div className="mx-auto max-w-7xl px-[4vw] pt-2">
                <div className="flex flex-col items-center max-w-max mx-auto">
                  <h1 className="mb-2 text-center text-xl font-bold text-text-light">
                    Question {item.question}
                  </h1>
                  <h2 className="mb-8 text-center text-2xl font-bold">
                    {surveyQuestion.question}
                  </h2>
                  <form className="flex flex-col self-start space-y-1 w-full">
                      {
                        surveyQuestion.options.map((option) => {
                          return (
                            <div key={option.id} className="flex flex-row items-baseline bg-slate-200 rounded-md has-[:checked]:ring-4 has-[:checked]:ring-inset has-[:checked]:ring-primary">
                              <input type="radio" name="option" value={option.id} checked={item.answer === String(option.id)} className="ml-2" disabled />
                              <label className="text-xl size-full py-2 pr-4 pl-2">{option.text}</label>
                            </div>
                          )
                        })
                      } 
                  </form>
                </div>
              </div>
            </section>
          )
        }
      )}
      <section>
        <div className="mx-auto max-w-7xl px-[4vw] pt-16">
          <footer className="flex flex-row justify-between">
            <button onClick={window.print}>Print Results</button>
            <Link to="/">Return to Main Page</Link>
          </footer>
        </div>
      </section>
    </main>
  );
};
