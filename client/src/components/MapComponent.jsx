import "leaflet/dist/leaflet.css";
import Title from "./Title";
import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { assets } from "../assets/assets";


const start = { lat: -13.984612, lng: 33.808037 };
const destination = { lat: -13.98, lng: 33.82 };

const MapComponent = () => {
  const [directions, setDirections] = useState(null);

  const calculateRoute = async () => {
    const directionsService = new window.google.maps.DirectionsService();

    const result = await directionsService.route({
      origin: start,
      destination: destination,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });

    setDirections(result);
  };
console.log("KEY:", import.meta.env.VITE_PALMS_PEBBLES_KEY);
  return (
    <div className="flex flex-col mt-10 text-white items-center bg-gray-800 py-10"> 
    <Title title="Where To Find Us" subtitle="Get Easy Directions To Find Us" className="font-playfair"/> 
    
   
      <LoadScript googleMapsApiKey={import.meta.env.VITE_PALMS_PEBBLES_KEY}>
      


        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "400px" }}
          center={start}
          zoom={14}
        >
          <Marker position={start} />
          <Marker position={destination} />

          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
        <button
          type="button"
          onClick={calculateRoute}
          className="mt-5 px-4 py-2 bg-white text-gray-800 flex items-center gap-1 rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img src={assets.locationFilledIcon} alt="Location Icon" className="w-5 h-4"/>
          Get Route
        </button>
      </LoadScript>
    </div>  
 );
};

export default MapComponent;
