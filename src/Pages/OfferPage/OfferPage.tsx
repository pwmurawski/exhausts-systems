import { Wrapper } from "./styles/OfferPageStyles";
import Map from "../../components/Map/Map";
import { Container, MapContainer } from "../Home/styles/HomeStyles";
import OfferPageContent from "../../components/OfferPageContent/OfferPageContent";

export default function OfferPage() {
  const location = {
    city: "Wysokie Mazowieckie",
    position: {
      N: 52.9166667,
      E: 22.516666666666666,
    },
  };

  return (
    <Wrapper data-testid="wrapperOfferPage">
      <Container data-testid="offerPageContainer">
        <OfferPageContent />
      </Container>
      <MapContainer data-testid="mapContainer">
        <Map
          mapPosition={[location.position.N, location.position.E]}
          mapZoom={13}
        />
      </MapContainer>
    </Wrapper>
  );
}
