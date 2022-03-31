import map from "../../assets/map.jpg";
import { Container } from "./styles/MapStyles";

export default function Map() {
  return (
    <Container data-testid="map">
      <img src={map} alt="map" />
    </Container>
  );
}
