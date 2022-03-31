import { useState } from "react";
import LocationBtnIcon from "../Svg/LocationIcon";
import { Container, Icon, Text } from "./styles/LocationBtn";

export default function LocationBtn() {
  const [isRotate, setIsRotate] = useState(false);

  const rotateIcon = () => {
    setIsRotate(!isRotate);
  };

  return (
    <Container data-testid="locationBtnContainer" onClick={rotateIcon}>
      <Text data-testid="text">Lokalizacja</Text>
      <Icon data-testid="icon" isRotate={isRotate}>
        <LocationBtnIcon />
      </Icon>
    </Container>
  );
}
