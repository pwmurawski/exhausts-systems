import { Container, Email, PhoneNumber } from "./styles/ContactOfferPageStyles";

export default function ContactOfferPage() {
  return (
    <Container data-testid="conContactOfferPage">
      <Email>Email: qwerty@gmail.com</Email>
      <PhoneNumber>Numer tel: 321123321</PhoneNumber>
    </Container>
  );
}
