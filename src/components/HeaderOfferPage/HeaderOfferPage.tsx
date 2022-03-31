import { useEffect, useState } from "react";
import {
  Container,
  Logo,
  Img,
  Location,
  Price,
  Text,
  Title,
  LocationIcon,
  LocationText,
} from "./styles/HeaderOfferPageStyles";
import img from "../../assets/fot.jpg";
import locationImg from "../../assets/location.png";
import BackBtn from "../BackBtn/BackBtn";
import SocialMediaOfferPage from "../SocialMediaOfferPage/SocialMediaOfferPage";
import randomColor from "../../helpers/randomColor";

export default function HeaderOfferPage() {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    setBgColor(randomColor());
  }, []);

  return (
    <Container bgColor={bgColor}>
      <BackBtn left="10px" top="10px" />
      <Logo>
        <Img src={img} />
      </Logo>
      <Text>
        <Title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie.
        </Title>
        <Location>
          <LocationIcon src={locationImg} />
          <LocationText>Warszawa</LocationText>
        </Location>
        <Price>1000 PLN</Price>
      </Text>
      <SocialMediaOfferPage />
    </Container>
  );
}
