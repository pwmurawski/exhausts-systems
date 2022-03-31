import { useRef } from "react";
import SearchBarIcon from "../Svg/SearchBarIcon";
import { Icon, Search, SearchInput } from "./styles/SearchBarStyles";

export default function SearchBar() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <Search
      data-testid="search"
      onClick={() => {
        searchInputRef.current?.focus();
      }}
    >
      <Icon data-testid="icon">
        <SearchBarIcon />
      </Icon>
      <SearchInput
        data-testid="searchInput"
        ref={searchInputRef}
        type="text"
        placeholder="Szukaj"
      />
    </Search>
  );
}
