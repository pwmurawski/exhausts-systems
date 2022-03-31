import { ReactElement } from "react";
import { Container, Body, Header } from "./styles/WindowOfferPageStyles";

interface IWindowOfferPageProps {
  headerContext: string | ReactElement;
  bodyContext: string | ReactElement;
}

export default function WindowOfferPage({
  headerContext,
  bodyContext,
}: IWindowOfferPageProps) {
  return (
    <Container>
      <Header>{headerContext}</Header>
      <Body>{bodyContext}</Body>
    </Container>
  );
}
