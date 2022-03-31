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
    <Container>
      <Info>
        <Icon>
          <Img src={company} />
        </Icon>
        <Name>kataNima</Name>
        <InfoText>Company</InfoText>
      </Info>
      <Info>
        <Icon>
          <Img src={fb} />
        </Icon>
        <Name>kataNima</Name>
        <InfoText>Facebook</InfoText>
      </Info>
      <Info>
        <Icon>
          <Img src={ig} />
        </Icon>
        <Name>kataNima</Name>
        <InfoText>Instagram</InfoText>
      </Info>
      <Info>
        <Icon>
          <Img src={yt} />
        </Icon>
        <Name>kataNima</Name>
        <InfoText>YouTube</InfoText>
      </Info>
    </Container>
  );
}
