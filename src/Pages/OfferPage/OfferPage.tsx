import { Wrapper } from "./styles/OfferPageStyles";
import Map from "../../components/Map/Map";
import { Container, MapContainer } from "../Home/styles/HomeStyles";
import OfferPageContent from "../../components/OfferPageContent/OfferPageContent";

export default function OfferPage() {
  return (
    <Wrapper>
      <Container data-testid="offerPageContainer">
        <OfferPageContent />
      </Container>
      <MapContainer data-testid="mapContainer">
        <Map />
      </MapContainer>
    </Wrapper>
  );
}
