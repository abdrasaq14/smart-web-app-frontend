import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { siteData } from "../../../utils/utils";
import CardLayout from "../../Cards/CardLayout";
// Fix for Leaflet marker icons
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});
const redIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl: "https://cdn-icons-png.flaticon.com/512/1160/1160306.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  className: "red-marker-icon", // Add a custom class to allow CSS overrides
});

const SiteLocationMap = () => {
  return (
    <CardLayout title="Site Locations" style="min-w-[350px]">
      <MapContainer
        center={siteData[0].position} // Default map center
        zoom={13} // Default zoom level
        style={{ height: "500px", width: "100%", minWidth: "350px", zIndex: 1 }}
      >
        {/* Add a tile layer (map background) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Add markers for each site */}
        {siteData.map((site) => (
          <Marker
            key={site.id}
            position={site.position}
            icon={site.isRed ? redIcon : L.Icon.Default.prototype}
          >
            <Popup>
              <h4>{site.name}</h4>
              <p>{site.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </CardLayout>
  );
};

export default SiteLocationMap;
