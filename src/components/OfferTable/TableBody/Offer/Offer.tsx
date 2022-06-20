import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {
  Container,
  ContentContainer,
  Center,
  ImgContainer,
  Img,
  InfoBottomLine,
  InfoTopLine,
  Title,
  PriceRanges,
  Left,
  Right,
  Time,
  TimeContainer,
  Icon,
  InfoPin,
  Name,
  Btn,
} from "./styles/OfferStyles";
import officeImg from "../../../../assets/company2.png";
import locationImg from "../../../../assets/location.png";
import ObservationIcon from "../../../Svg/ObservationBtn";
import HomeReducerContext from "../../../../context/HomeReducerContext";

interface IOfferProps {
  id: string;
  testId: number;
  title: string;
  price: string;
  img: string;
  date: string;
  office: string;
  location: string;
}

export default function Offer({
  id,
  testId,
  title,
  img,
  price,
  date,
  office,
  location,
}: IOfferProps) {
  const navigate = useNavigate();
  const homeReducer = useContext(HomeReducerContext);

  return (
    <Container
      data-testid={`offer-${testId}`}
      onMouseEnter={() => {
        homeReducer?.dispatch({ type: "setOfferIsMouseHover", id });
      }}
      onMouseLeave={() => {
        homeReducer?.dispatch({ type: "setOfferIsMouseHover", id: null });
      }}
      onClick={() => {
        navigate(`/offer/${id}`);
        homeReducer?.dispatch({ type: "setOfferIsMouseHover", id: null });
      }}
    >
      <Center data-testid="center">
        <ImgContainer data-testid="imgContainer">
          <Img data-testid="img" src={img} />
        </ImgContainer>
      </Center>
      <ContentContainer data-testid="contentContainer">
        <InfoTopLine data-testid="infoTopLine">
          <Title data-testid="title">{title}</Title>
          <Right data-testid="right">
            <PriceRanges data-testid="priceRanges">{`${price} PLN`}</PriceRanges>
            <TimeContainer data-testid="timeContainer">
              <Time data-testid="time">{date}</Time>
            </TimeContainer>
          </Right>
        </InfoTopLine>
        <InfoBottomLine data-testid="infoBottomLine">
          <Left data-testid="left">
            <InfoPin data-testid="infoPin-0">
              <Icon data-testid="iconOffice" src={officeImg} />
              <Name data-testid="nameInfoPin-0">{office}</Name>
            </InfoPin>
            <InfoPin data-testid="infoPin-1">
              <Icon data-testid="iconLocation" src={locationImg} />
              <Name data-testid="nameInfoPin-1">{location}</Name>
            </InfoPin>
          </Left>
          <Right data-testid="right2">
            <Btn data-testid="btn">
              <ObservationIcon />
            </Btn>
          </Right>
        </InfoBottomLine>
      </ContentContainer>
    </Container>
  );
}
