import {
  Container,
  Header,
  Option,
  OptionContainer,
  SortSelect,
} from "./styles/TableHeaderStyles";

export default function TableHeader() {
  return (
    <Header data-testid="header">
      <Container data-testid="container">
        <OptionContainer data-testid="optionContainer">
          <Option data-testid="option-0" to="/">
            Firmy
          </Option>
          <Option data-testid="option-1" to="/offers">
            Oferty
          </Option>
        </OptionContainer>
        <SortSelect data-testid="sortSelect">Sort by: latest</SortSelect>
      </Container>
    </Header>
  );
}
