import placesArray from "@/data/places-data.json";
import placeImages from "@/assets/place-images";

const updatedPlaceArray = placesArray.map(place => ({
  id: place.id,
  placeName: place.placeName,
  countryName: place.countryName,
  photo: placeImages[place.photoFilename],
  description: place.description,
  websiteUrl: place.websiteUrl,
}))

console.log(updatedPlaceArray);


export default places = {
  array: updatedPlaceArray,
}
