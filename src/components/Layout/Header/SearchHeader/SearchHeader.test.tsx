import { render } from "@testing-library/react";
import SearchHeader from "./SearchHeader";

const renderSearchHeader = () => {
  const utils = render(<SearchHeader />);

  return { ...utils };
};

describe("SearchHeader component", () => {
  it("render Container", () => {
    const { getByTestId } = renderSearchHeader();
    const container = getByTestId("searchBarContainer");

    expect(container).toBeInTheDocument();
  });

  it("render SearchBar", () => {
    const { getByTestId } = renderSearchHeader();
    const search = getByTestId("search");

    expect(search).toBeInTheDocument();
  });

  it("render LocationBtn", () => {
    const { getByTestId } = renderSearchHeader();
    const container = getByTestId("locationBtnContainer");

    expect(container).toBeInTheDocument();
  });

  it("Container to have style", () => {
    const { getByTestId } = renderSearchHeader();
    const container = getByTestId("searchBarContainer");

    expect(container).toHaveStyle({
      boxSizing: "border-box",
      display: "flex",
      height: "83px",
      padding: "14px 15px 10px 15px",
    });
  });
});
