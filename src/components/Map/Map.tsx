/* eslint-disable no-underscore-dangle */
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useLocation, useNavigate } from "react-router-dom";
import { markerIcon, markerIconActive } from "./MarkerIcon/MarkerIcon";
import { Container, LeafletStyles } from "./styles/MapStyles";

interface IMarkersData {
  offerId: string;
  position: LatLngExpression;
}

interface IMapProps {
  mapPosition: LatLngExpression;
  mapZoom: number;
  markerActiveId?: string | null;
}

const defaultProps = {
  markerActiveId: null,
};

export default function Map({
  mapPosition,
  mapZoom,
  markerActiveId,
}: IMapProps) {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const markersData: IMarkersData[] = [
    {
      offerId: "1",
      position: [53.1330556, 23.164166666666667],
    },
    {
      offerId: "2",
      position: [52.9166667, 22.516666666666666],
    },
    {
      offerId: "3",
      position: [52.25, 21],
    },
  ];

  const markerClickHandler = (offerId: string) => {
    const url = `/offer/${offerId}`;
    if (pathname !== url) {
      nav(url);
    }
  };

  return (
    <Container>
      <LeafletStyles />
      <MapContainer center={mapPosition} zoom={mapZoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markersData.map(({ offerId, position }) => (
          <Marker
            key={offerId}
            position={position}
            icon={markerActiveId === offerId ? markerIconActive : markerIcon}
            eventHandlers={{
              click: () => {
                markerClickHandler(offerId);
              },
            }}
          >
            <Popup>popup</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Container>
  );
}

Map.defaultProps = defaultProps;
