/* eslint-disable no-underscore-dangle */
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useContext } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ReducerContext from "../../context/ReducerContext";
import { markerIcon, markerIconActive } from "./MarkerIcon/MarkerIcon";
import { Container, LeafletStyles } from "./styles/MapStyles";

interface IMapProps {
  mapPosition: LatLngExpression;
  mapZoom: number;
}

export default function Map({ mapPosition, mapZoom }: IMapProps) {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const reducerCon = useContext(ReducerContext);
  const offerIsMouseHover = reducerCon?.state.offerIsMouseHover;
  const markersData = [
    {
      offerId: "1",
      position: {
        N: 53.1330556,
        E: 23.164166666666667,
      },
    },
    {
      offerId: "2",
      position: {
        N: 52.9166667,
        E: 22.516666666666666,
      },
    },
    {
      offerId: "3",
      position: {
        N: 52.25,
        E: 21,
      },
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
      <MapContainer center={mapPosition} zoom={mapZoom} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markersData.map(({ offerId, position }) => (
          <Marker
            key={offerId}
            position={[position.N, position.E]}
            icon={
              offerIsMouseHover === offerId || id === offerId
                ? markerIconActive
                : markerIcon
            }
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
