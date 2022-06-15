import L from "leaflet";
import location from "../../../assets/location.png";

const markerIcon = new L.Icon({
  iconUrl: location,
  iconSize: new L.Point(40, 40),
});

export default markerIcon;
