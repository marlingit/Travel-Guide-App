import { GridLayout } from "@/components/layouts";
import { Card } from "@/components/ui/card";
import places from "@/lib/places.js";
import { Outlet, useNavigate } from "react-router-dom";
import "material-symbols";

export const PlacesRoute = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`details/${id}`, { state: { from: "places" } });
  };

  return (
    <main role="main">
      <section className="pt-[96px]">
        <div className="mx-auto max-w-7xl px-[4vw]">
          <header className="flex flex-col items-center justify-center">
            <h1 className="mb-2 text-center text-clamp-4xl-6xl font-bold">
              Places
            </h1>
            <p className="mb-16 text-center text-clamp-lg-3xl font-semibold text-text-light">
              Best Places to Visit in the World!
            </p>
          </header>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl px-[4vw]">
          <GridLayout>
            {places.array.map((place) => (
              <Card
                key={place.id}
                title={place.placeName}
                image={place.photo}
                description={place.countryName}
                onClick={() => handleCardClick(place.id)}
              />
            ))}
          </GridLayout>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl px-[4vw] pt-16">
          <footer className="text-center italic text-text-light">
            <p>
              <span className="material-symbols-rounded align-top">info</span>{" "}
              World's Best Places to Visit data and rankings are taken from:{" "}
              <a
                className="text-primary hover:underline"
                href="https://travel.usnews.com"
              >
                U.S. News Travel
              </a>
            </p>
          </footer>
        </div>
      </section>
      <Outlet />
    </main>
  );
};
