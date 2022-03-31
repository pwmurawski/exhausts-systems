import styled from "styled-components";
import { ReactElement } from "react";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;
const Header = styled.header``;
const Content = styled.main``;

interface ILayoutProps {
  header: ReactElement;
  content: ReactElement;
}

export default function Layout({ header, content }: ILayoutProps) {
  return (
    <Wrapper data-testid="layoutWrapper">
      <Header data-testid="header">{header}</Header>
      <Content data-testid="content">{content}</Content>
    </Wrapper>
  );
}
