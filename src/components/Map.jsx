import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  useEffect(() => {
    // Initialize map
    const map = L.map("map", {
      
    }).setView([36.9741, -122.0308], 15);

    // Add custom styled tile layer
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 19,
      }
    ).addTo(map);

    // Create a glowing circle effect
    const radius = 150;
    const circle = L.circle([36.9741, -122.0308], {
      radius: radius,
      stroke: false,
      fillColor: "#1DB954",
      fillOpacity: 0.3,
      className: "glowing-circle",
    }).addTo(map);

    // Add inner circle for more intense glow
    const innerCircle = L.circle([36.9741, -122.0308], {
      radius: radius / 2,
      stroke: false,
      fillColor: "#1DB954",
      fillOpacity: 0.5,
      className: "glowing-circle-inner",
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="relative w-[250px] h-80">
      <div
        id="map"
        className="w-full h-full rounded-lg overflow-hidden shadow-lg"
      />
      <style jsx global>{`
        .leaflet-tile-pane {
          filter: contrast(1.1) brightness(1.2);
        }

        .glowing-circle {
          animation: pulse 2s infinite;
          filter: blur(10px);
        }

        .glowing-circle-inner {
          animation: pulse 2s infinite;
          filter: blur(5px);
        }

        @keyframes pulse {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 0.3;
          }
        }

        .leaflet-control-container {
          display: none;
        }

        #map {
          background-color: #10252d;
        }

        .leaflet-tile {
          filter: brightness(1.2) contrast(1.1) hue-rotate(190deg) saturate(0.8);
        }

        /* Custom color overlays */
        #map::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(16, 37, 45, 0.8),
            rgba(32, 59, 68, 0.8)
          );
          pointer-events: none;
          mix-blend-mode: color;
        }

        /* Water bodies */
        .leaflet-tile-loaded {
          --water-color: #0b161a;
        }
      `}</style>
    </div>
  );
};

export default Map;
