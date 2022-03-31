import { fireEvent, render } from "@testing-library/react";
import SearchBar from "./SearchBar";

const renderSearchBar = () => {
  const utils = render(<SearchBar />);

  return { ...utils };
};

describe("SearchBar component", () => {
  it("render Search", () => {
    const { getByTestId } = renderSearchBar();
    const search = getByTestId("search");

    expect(search).toBeInTheDocument();
  });

  it("render Icon", () => {
    const { getByTestId } = renderSearchBar();
    const icon = getByTestId("icon");

    expect(icon).toBeInTheDocument();
  });

  it("render Svg", () => {
    const { getByTestId } = renderSearchBar();
    const svg = getByTestId("searchBarSvg");

    expect(svg).toBeInTheDocument();
  });

  it("render SearchInput", () => {
    const { getByTestId } = renderSearchBar();
    const searchInput = getByTestId("searchInput");

    expect(searchInput).toBeInTheDocument();
  });

  it("Search to have style", () => {
    const { getByTestId } = renderSearchBar();
    const search = getByTestId("search");

    expect(search).toHaveStyle({
      boxSizing: "border-box",
      display: "flex",
      width: "350px",
      height: "36px",
      padding: "3px 10px",
      marginTop: "6px",
      borderRadius: "20px",
      cursor: "text",
      transition: "background-color 300ms",
    });
  });

  it("Icon to have style", () => {
    const { getByTestId } = renderSearchBar();
    const icon = getByTestId("icon");

    expect(icon).toHaveStyle({
      boxSizing: "border-box",
      minWidth: "30px",
      minHeight: "30px",
      width: "30px",
      height: "30px",
      padding: "3px",
    });
  });

  it("SearchInput to have style", () => {
    const { getByTestId } = renderSearchBar();
    const searchInput = getByTestId("searchInput");

    expect(searchInput).toHaveStyle({
      boxSizing: "border-box",
      width: "100%",
      border: "0",
      padding: "6px 0 7px 5px",
      background: "transparent",
      outline: "none",
      fontSize: "15px",
      fontFamily: "inherit",
    });
  });

  it("click on Search the SearchInput will be focus", () => {
    const { getByTestId } = renderSearchBar();
    const search = getByTestId("search");
    const searchInput = getByTestId("searchInput");

    expect(searchInput).not.toHaveFocus();
    fireEvent.click(search);
    expect(searchInput).toHaveFocus();
  });
});
