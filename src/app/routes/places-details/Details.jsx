import { useParams, useLocation, useNavigate } from "react-router-dom";
import placesArray from "@/data/places-data.json";
import placeImages from "@/assets/place-images";

export const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const onDismiss = () => {
    navigate("/places");
  };

  console.log(`ID: ${id}`);
  const place = placesArray.find((place) => place.id === parseInt(id));


  if (location.state?.from === "places") {
    console.log("From places");
  } else {
    console.log("From direct link");
  }

  return (
    <div className="z-[1000] fixed inset-0 backdrop-blur-sm backdrop-brightness-50 pt-8 px-4" onClick={onDismiss}>
      <div className="flex bg-white rounded-lg overflow-auto overscroll-none">
        <div className="fixed top-0 border bg-inherit flex flex-row">
          <h1>{place.title}</h1>
        </div>
      </div>
    </div>
  );
}
