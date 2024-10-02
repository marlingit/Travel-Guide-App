import { useParams, useLocation } from "react-router-dom";

export const Details = () => {
  let { id } = useParams();
  let location = useLocation();

  if (location.state === "places") {
    console.log("From places");
  } else {
    console.log("From direct link");
  }

  return (
    <div>
      <h1>Details</h1>
    </div>
  );
}
