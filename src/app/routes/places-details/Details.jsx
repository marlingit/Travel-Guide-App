import { useParams, useLocation, useNavigate } from "react-router-dom";
import places from "@/lib/places.js";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const onDismiss = () => {
    navigate("/places");
  };

  useEffect(() => {
    if (location.state?.from === "places") {
      document.body.classList.add("overflow-hidden");
      return () => {
        document.body.classList.remove("overflow-hidden");
      };
    }
  }, []);

  console.log(`ID: ${id}`);
  const place = places.getPlaceById(id);
  console.log(place);

  if (location.state?.from === "places") {
    console.log("From places");
  } else {
    console.log("From direct link");
  }

  return (
    <div
      className="fixed inset-0 z-[1000] max-h-screen px-6 py-8 backdrop-blur-sm backdrop-brightness-50"
      onClick={onDismiss}
    >
      <div
        className="mx-auto flex h-full max-w-[800px] flex-col overflow-hidden rounded-lg bg-primary"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="border-b bg-inherit p-2 px-4">
          <div className="flex flex-row justify-between text-clamp-lg-3xl font-semibold">
            <h1>{place.placeName + ", " + place.countryName}</h1>
            <Button
              onClick={onDismiss}
              symbol="close"
              sr="Close Details"
              size="3xl"
            />
          </div>
        </header>
        <main className="overflow-y-auto">
          <ul className="flex flex-col gap-4 px-4">
            <li>
              <h3 className="text-lg font-semibold">Place Name</h3>
              <p>{place.placeName}</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Country Name</h3>
              <p>{place.countryName}</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Place Photo</h3>
              <img
                className="rounded-md max-w-[320px] w-full h-auto"
                src={place.photo}
                alt={place.placeName}
              />
            </li>
            <li>
              <h3 className="text-lg font-semibold">Place Description</h3>
              <p>{place.description}</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Place Country Flag</h3>
              <img
                className="rounded-md"
                src={`https://flagcdn.com/w320/${place.countryCode}.png`}
                alt={place.countryName}
              />
            </li>
            <li>
              <h3 className="text-lg font-semibold">Place Website</h3>
              <a href={place.websiteUrl} target="_blank" rel="noreferrer" className="text-accent">
                <span className="material-symbols-rounded align-top">open_in_new</span>Show Website
              </a>
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
};
