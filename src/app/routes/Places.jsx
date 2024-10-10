import { GridLayout } from "@/components/layouts";
import { Card } from "@/components/ui/card";
import placesArray from "@/data/places-data.json";
import placeImages from "@/assets/place-images";
import { Outlet, useNavigate } from "react-router-dom";

export const PlacesRoute = () => {

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`details/${id}`, { state: { from: "places" } });
  }

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
            {placesArray.map((place) => (
              <Card key={place.id} title={place.placeName} image={placeImages[place.photoFilename]} description={place.countryName} onClick={() => handleCardClick(place.id)} />
            ))}
          </GridLayout>
        </div>
      </section>
      <Outlet />
    </main>
  );
};
