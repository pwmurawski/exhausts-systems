import { LatLngExpression, LeafletMouseEventHandlerFn } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useLocation, useNavigate } from "react-router-dom";
import markerIcon from "./MarkerIcon/MarkerIcon";
import { Container, LeafletContainer } from "./styles/MapStyles";

interface IMapProps {
  mapPosition: LatLngExpression;
  mapZoom: number;
}

export default function Map({ mapPosition, mapZoom }: IMapProps) {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const markersData = [
    {
      offerId: 1,
      city: "Białystok",
      position: {
        N: 53.1330556,
        E: 23.164166666666667,
      },
    },
    {
      offerId: 2,
      city: "Wysokie Mazowieckie",
      position: {
        N: 52.9166667,
        E: 22.516666666666666,
      },
    },
    {
      offerId: 3,
      city: "Warszawa",
      position: {
        N: 52.25,
        E: 21,
      },
    },
  ];

  const markerClickHandler = (offerId: number) => {
    const url = `/offer/${offerId}`;
    if (pathname !== url) {
      nav(url);
    }
  };

  return (
    <Container>
      <LeafletContainer />
      <MapContainer center={mapPosition} zoom={mapZoom} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markersData.map(({ offerId, position }) => (
          <Marker
            key={offerId}
            position={[position.N, position.E]}
            icon={markerIcon}
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
