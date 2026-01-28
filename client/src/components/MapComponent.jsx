import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';  // Import the routing machine plugin
import Title from './Title';

const location = { lat: -13.984612, lng: 33.808037 }; // Palms and Pebbles
const destination = { lat: -13.9800000, lng: 33.8200000 }; // Another location for the route (adjust as needed)

const MapComponent = () => {
  useEffect(() => {
    // Create the map
    const map = L.map('map').setView([location.lat, location.lng], 14);

    // Add OpenStreetMap Tile Layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    // Create a Marker for the start location (Palms and Pebbles)
    const startMarker = L.marker([location.lat, location.lng]).addTo(map);
    startMarker.bindPopup("Palms and Pebbles");

    // Create a Marker for the destination
    const endMarker = L.marker([destination.lat, destination.lng]).addTo(map);
    endMarker.bindPopup("Destination");

    // Add routing (directions) between the start and destination
    const routeControl = L.Routing.control({
      waypoints: [
        L.latLng(location.lat, location.lng),  // Start point
        L.latLng(destination.lat, destination.lng) // End point
      ],
      routeWhileDragging: true  // Option to update the route as you drag
    }).addTo(map);
  }, []);

  return ( 
    <div className="flex flex-col mt-10 text-white items-center bg-gray-800 py-10">
        <Title title="Where To Find Us" subtitle="Get Easy Directions To Find Us" /> 
        <div  id="map" style={{ height: '400px', width: '100%' }} />
    </div>
  )
};

export default MapComponent;



{/* 
Google aps Api

import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Replace this with your location's coordinates (Palms and Pebbles)
const location = { lat: -13.9850458, lng: 33.8073219 }; // Example: Los Angeles

const containerStyle = {
  width: "100%",
  height: "400px"
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={14}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;

  */}