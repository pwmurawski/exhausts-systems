import L from "leaflet";
import location from "../../../assets/location.png";

export const markerIcon = new L.Icon({
  iconUrl: location,
  iconSize: new L.Point(40, 40),
});

export const markerIconActive = new L.Icon({
  iconUrl: location,
  iconSize: new L.Point(40, 40),
  className: "leaflet-active",
});
