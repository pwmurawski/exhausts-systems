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
    <Container data-testid="conWindowOfferPage">
      <Header data-testid="headerContext">{headerContext}</Header>
      <Body data-testid="bodyContext">{bodyContext}</Body>
    </Container>
  );
}
