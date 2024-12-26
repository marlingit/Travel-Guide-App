import attractionImages from "@/assets/attraction-images";
import { useState } from "react";
import { BlankLinkButton } from "@/components/ui/link-button/BlankLinkButton";
export const AttractionsRoute = () => {
  const [imageId, setImageId] = useState(0);

  setTimeout(() => {
    setImageId((imageId + 1) % attractionImages.length);
  }
  , 7000);

  return (
    <main role="main">
      <section className="pt-[56px] md:pt-[80px]">
        <div className="md:mx-auto md:max-w-7xl md:px-[4vw]">
          <div className="flex flex-col items-center justify-center h-[calc(100vh-56px)] md:h-[calc(100vh-80px)] bg-center bg-cover" style={{backgroundImage: `url(${attractionImages[imageId]})`}}>
            <div className="absolute inset-0 bg-white/70"></div>
            <h1 className="mb-2 text-center text-clamp-4xl-6xl font-bold z-10">
              Attractions
            </h1>
            <p className="mb-12 text-center text-clamp-lg-3xl font-semibold text-text-light z-10">
              Best Travel Attractions in the World!
            </p>
            <BlankLinkButton to="survey" className="px-12 py-5 mx-auto text-nowrap z-10 bg-accent-dark text-primary rounded-full font-semibold hover:bg-accent transition-colors duration-150 ease-linear">
              Start Survey
            </BlankLinkButton>
          </div>
        </div>
      </section>
    </main>
  );
};
