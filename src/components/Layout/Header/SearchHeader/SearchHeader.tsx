import SearchBar from "../../../SearchBar/SearchBar";
import LocationBtn from "../../../LocationBtn/LocationBtn";
import { Container } from "./styles/SearchHeaderStyles";

export default function SearchHeader() {
  return (
    <Container data-testid="searchBarContainer">
      <SearchBar />
      <LocationBtn />
    </Container>
  );
}
