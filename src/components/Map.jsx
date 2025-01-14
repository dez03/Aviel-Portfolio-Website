import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";

const Map = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      // Initialize map
      mapInstanceRef.current = L.map(mapRef.current, {
        center: [36.9916, -122.0583],
        zoom: 15,
        zoomControl: false, // Disable default zoom control to add a custom one
        attributionControl: false,
        minZoom: 3,
        maxZoom: 19,
        tap: false,
        touchZoom: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: true,
      });

      // Add tile layer with a lighter navy-blue color scheme
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", // CartoDB Positron
        {
          maxZoom: 19,
          updateWhenIdle: true,
          updateWhenZooming: false,
          keepBuffer: 2,
        }
      ).addTo(mapInstanceRef.current);

      // Add custom zoom control
      const zoomControl = L.control.zoom({ position: "bottomleft" });
      zoomControl.addTo(mapInstanceRef.current);

      // Style the zoom control buttons
      const zoomButtons = document.querySelectorAll(".leaflet-control-zoom a");
      zoomButtons.forEach((button) => {
        button.style.backgroundColor = "rgba(0, 0, 50, 0.8)"; // Navy blue background
        button.style.color = "white";
        button.style.border = "none";
        button.style.borderRadius = "9999px"; // Full pill shape
        button.style.padding = "8px 16px";
        button.style.margin = "5px";
        button.style.fontSize = "16px";
        button.style.fontWeight = "bold";
        button.style.display = "flex";
        button.style.justifyContent = "center";
        button.style.alignItems = "center";
      });

      // Add the green circle at the fixed location
      const locationCoords = [36.9924592, -122.0517721]; // Your location coordinates
      L.circle(locationCoords, {
        color: "rgba(92, 230, 92, 0.8)",
        fillColor: "rgba(92, 230, 92, 0.4)",
        fillOpacity: 0.4,
        radius: 50, // Adjust radius as needed
      }).addTo(mapInstanceRef.current);

      // Center the map to the location
      mapInstanceRef.current.setView(locationCoords, 15);

      mapInstanceRef.current.options.zoomAnimation = true;
      mapInstanceRef.current.options.markerZoomAnimation = true;
    }

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-[250px] h-80">
      {/* Location Label */}
      <div className="absolute top-4 left-4 z-[1000] flex items-center gap-2 bg-black/80 rounded-full px-4 py-2">
        <MapPin className="w-4 h-4 text-white" />
        <span className="text-sm text-white font-medium">Santa Cruz, CA</span>
      </div>

      {/* Map Container */}
      <div ref={mapRef} className="w-full h-full rounded-lg overflow-hidden" />
    </div>
  );
};

export default Map;
