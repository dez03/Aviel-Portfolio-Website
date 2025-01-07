import React, { useEffect } from "react";
import L from "leaflet"; // Import Leaflet
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS


const Map = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map("map", {
      attributionControl: false, // Remove attribution watermark
    }).setView([36.9741, -122.0308], 15); // Centered on Santa Cruz

    // Add a working tile layer (OpenStreetMap instead of Mapbox)
    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", // OpenStreetMap free tiles
      {
        maxZoom: 19,
      }
    ).addTo(map);

    // Add a custom gradient circle
    const gradientCircle = L.divIcon({
      className: "gradient-circle", // Custom CSS class
      html: `<div class="circle-gradient"></div>`,
      iconSize: [100, 100], // Size of the gradient
      iconAnchor: [50, 50], // Center the gradient
    });

    // Place the gradient circle on the map
    L.marker([36.9741, -122.0308], { icon: gradientCircle }).addTo(map);
    

    // Add a custom message overlay
    const message = document.createElement("div");
    message.id = "map-message";
    message.className = "map-message";
    document.getElementById("map").appendChild(message);

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on("click", onMapClick);
  
  
    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "400px",
        width: "50%",
        cursor: "initial",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        position: "relative", // Needed for absolute positioning of the message
      }}
    ></div>
  );
};

export default Map;