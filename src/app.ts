import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;
const GOOGLE_API_KEY = "AIzaSyBaEv3dHXqFhkfPRkYKwRCUka2wLK6G-yI";

// declare var google: any;

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

function serchAddressHandler(event: Event) {
  event.preventDefault();
  const enterdAddress = addressInput.value;
  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enterdAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fech location");
      }
      const coordinates = response.data.results[0].geometry.location;
      console.log(coordinates);
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: coordinates,
        zoom: 16,
      });
      new google.maps.Marker({
        map: map,
        position: coordinates,
      });
      console.log("marker :", google.maps.marker);
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

form?.addEventListener("submit", serchAddressHandler);
