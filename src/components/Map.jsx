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

      // dark tile layer to match site theme
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 19,
          updateWhenIdle: true,
          updateWhenZooming: false,
          keepBuffer: 2,
          className: "map-tiles", // class for custom styling
        }
      ).addTo(mapInstanceRef.current);

      //  custom zoom control
      const zoomControl = L.control.zoom({ position: "bottomleft" });
      zoomControl.addTo(mapInstanceRef.current);

      //  zoom control buttons styling
      const zoomButtons = document.querySelectorAll(".leaflet-control-zoom a");
      zoomButtons.forEach((button) => {
        button.style.backgroundColor = "#0f1118";
        button.style.color = "#ffffff";
        button.style.border = "1px solid rgba(255, 255, 255, 0.3)";
        button.style.borderRadius = "12px";
        button.style.width = "36px";
        button.style.height = "36px";
        button.style.lineHeight = "36px";
        button.style.margin = "6px";
        button.style.fontSize = "18px";
        button.style.fontWeight = "800";
        button.style.display = "flex";
        button.style.justifyContent = "center";
        button.style.alignItems = "center";
        button.style.boxShadow = "0 6px 16px rgba(0,0,0,0.4)";
      });

      // Add the green circle at the fixed location
      const locationCoords = [36.996659, -122.055175]; // Your location coordinates
      L.circle(locationCoords, {
        color: "#5ce65ccc",
        fillColor: "#5ce65c66",
        fillOpacity: 0.4,
        radius: 80, // Adjust radius as needed
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
    <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-primary-400/50 transition-all duration-300">
      <div className="absolute top-4 left-4 z-[1000] flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 group-hover:border-primary-400/50 transition-colors">
        <MapPin className="w-4 h-4 text-primary-400" />
        <span className="text-sm text-white font-medium">Santa Cruz, CA</span>
      </div>
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default Map;
