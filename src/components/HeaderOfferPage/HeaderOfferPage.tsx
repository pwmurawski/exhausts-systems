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
    <Container data-testid="conHeaderOfferPage" bgColor={bgColor}>
      <BackBtn left="10px" top="10px" />
      <Logo data-testid="logo">
        <Img data-testid="img" src={img} />
      </Logo>
      <Text data-testid="text">
        <Title data-testid="title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie.
        </Title>
        <Location data-testid="location">
          <LocationIcon data-testid="locationIcon" src={locationImg} />
          <LocationText data-testid="locationText">Warszawa</LocationText>
        </Location>
        <Price data-testid="price">1000 PLN</Price>
      </Text>
      <SocialMediaOfferPage />
    </Container>
  );
}
