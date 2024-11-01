import { useParams } from "react-router-dom";
import { LinkButton } from "@/components/ui/link-button";
import "material-symbols";


export const Questions = () => {
  const { question } = useParams();
  return (
    <main role="main">
      <section className="pt-14 md:pt-20">
        <div className="mx-auto max-w-7xl px-[4vw]">
          <header className="flex flex-col items-center justify-center">
            <h1 className="mb-2 text-center text-clamp-lg-3xl font-bold">
              Question {question}
            </h1>
          </header>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl px-[4vw] pt-16">
          <div className="flex justify-between">
            <LinkButton to={`/attractions/survey/${Number(question) - 1}`} className={`px-14 py-5  text-nowrap ${Number(question) <= 1 ? "cursor-no-drop bg-secondary border-secondary hover:shadow-none" : ""}`}>
              Previous Question
            </LinkButton>
            <LinkButton to={`/attractions/survey/${Number(question) + 1}`} className="px-14 py-5  text-nowrap">
              Next Question
            </LinkButton>
          </div>
        </div>
      </section>
      </main>
  );
};


