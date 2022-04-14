import {
  Container,
  Icon,
  Img,
  Info,
  InfoText,
  Name,
} from "./styles/SocialMediaOfferPageStyles";
import company from "../../assets/company.png";
import fb from "../../assets/facebook.png";
import ig from "../../assets/instagram.png";
import yt from "../../assets/youtube.png";

export default function SocialMediaOfferPage() {
  return (
    <Container data-testid="conSocialMediaOfferPage">
      <Info data-testid="info">
        <Icon data-testid="icon">
          <Img data-testid="imgSocialMediaOfferPage" src={company} />
        </Icon>
        <Name data-testid="name">kataNima</Name>
        <InfoText data-testid="infoText">Company</InfoText>
      </Info>
      <Info data-testid="info">
        <Icon data-testid="icon">
          <Img data-testid="imgSocialMediaOfferPage" src={fb} />
        </Icon>
        <Name data-testid="name">kataNima</Name>
        <InfoText data-testid="infoText">Facebook</InfoText>
      </Info>
      <Info data-testid="info">
        <Icon data-testid="icon">
          <Img data-testid="imgSocialMediaOfferPage" src={ig} />
        </Icon>
        <Name data-testid="name">kataNima</Name>
        <InfoText data-testid="infoText">Instagram</InfoText>
      </Info>
      <Info data-testid="info">
        <Icon data-testid="icon">
          <Img data-testid="imgSocialMediaOfferPage" src={yt} />
        </Icon>
        <Name data-testid="name">kataNima</Name>
        <InfoText data-testid="infoText">YouTube</InfoText>
      </Info>
    </Container>
  );
}
