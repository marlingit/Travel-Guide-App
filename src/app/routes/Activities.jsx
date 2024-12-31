import activityData from "@/data/activities-data.json";
import activityImages from "@/assets/activity-images";
import "material-symbols";

export const ActivitiesRoute = () => {
  return (
    <main role="main">
      <section className="pt-[96px]">
        <div className="mx-auto max-w-7xl px-[4vw]">
          <header className="flex flex-col items-center justify-center">
            <h1 className="mb-2 text-center text-clamp-4xl-6xl font-bold">
              Activities
            </h1>
            <p className="mb-16 text-center text-clamp-lg-3xl font-semibold text-text-light">
              Best Travel Activities in the World!
            </p>
          </header>
        </div>
      </section>
      {activityData.map((data) => (
        <section className="group py-12" key={data.id}>
          <div className="align-center mx-auto grid max-w-7xl grid-cols-none px-[4vw] group-odd:pr-4 group-even:pl-4 xl:grid-cols-2 xl:gap-8">
            <div className="w-fit group-odd:justify-self-end xl:group-odd:order-2">
              <div className="relative">
                <div className="absolute  size-full max-h-[400px] translate-y-6 rounded-md bg-accent -z-10 group-odd:-translate-x-6 group-even:translate-x-6"></div>
                <img
                  src={activityImages[data.photoFilename]}
                  alt={data.title}
                  className="max-h-[400px] rounded-md"
                />
              </div>
              <p className="text-center font-semibold text-white">
                {data.location}
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-[30rem] group-odd:mr-4 group-even:ml-4 lg:max-w-[32rem] lg:group-odd:mr-auto lg:group-even:ml-auto xl:m-0">
              <h2 className="mb-4 text-2xl font-semibold xl:text-5xl">
                {data.title}
              </h2>
              <p className="mb-2 text-lg">{data.description}</p>
              <a
                href={data.websiteUrl}
                className="text-lg text-accent hover:underline"
              >
                Learn More{" "}
                <span
                  className="material-symbols-rounded align-text-bottom"
                  style={{ fontSize: 20 }}
                >
                  open_in_new
                </span>
              </a>
            </div>
          </div>
        </section>
      ))}
      <section>
        <footer className="mx-auto max-w-7xl px-[4vw] pt-16">
          <p className="text-center italic text-text-light">
            <span className="material-symbols-rounded align-top">info</span>{" "}
            Travel Activities in the World data and photos are taken from:{" "}
            <a
              className="text-accent hover:underline"
              href="https://tourscanner.com"
            >
              TourScanner
            </a>
          </p>
        </footer>
      </section>
    </main>
  );
};
