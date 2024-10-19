import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import beachImages from "@/assets/beach-images";
import beachData from "@/data/beaches-data.json";

export const BeachesRoute = () => {
  return (
    <main role="main">
      <section className="pt-[96px]">
        <div className="mx-auto max-w-7xl px-[4vw]">
          <header className="flex flex-col items-center justify-center">
            <h1 className="mb-2 text-center text-clamp-4xl-6xl font-bold">
              Beaches
            </h1>
            <p className="mb-16 text-center text-clamp-lg-3xl font-semibold text-text-light">
              24 Best Island Beaches in the World!
            </p>
          </header>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl px-[4vw]">
          <Splide options={{
            type: "loop",
            rewind: true,
          }}>
            {beachData.map((data) => (
              <SplideSlide key={data.id}>
                <img src={beachImages[data.photoFilename]} alt={data.title} className="w-full h-auto rounded-md" />
                </SplideSlide>
                ))}
          </Splide>
        </div>
      </section>
    </main>
  );
};
