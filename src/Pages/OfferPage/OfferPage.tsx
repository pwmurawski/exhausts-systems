import { useParams } from "react-router-dom";
import { LatLngExpression } from "leaflet";
import { Wrapper } from "./styles/OfferPageStyles";
import Map from "../../components/Map/Map";
import { Container, MapContainer } from "../Home/styles/HomeStyles";
import OfferPageContent from "../../components/OfferPageContent/OfferPageContent";

export default function OfferPage() {
  const { id } = useParams();
  const location: LatLngExpression = [52.9166667, 22.516666666666666];

  return (
    <Wrapper data-testid="wrapperOfferPage">
      <Container data-testid="offerPageContainer">
        <OfferPageContent />
      </Container>
      <MapContainer data-testid="mapContainer">
        <Map mapPosition={location} mapZoom={13} markerActiveId={id} />
      </MapContainer>
    </Wrapper>
  );
}
