import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import TableHeader from "./TableHeader";

const renderWithRouter = (children: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(children, {
    container: document.body.appendChild(document.createElement("table")),
    wrapper: BrowserRouter,
  });
};

const renderTableHeader = () => {
  const utils = renderWithRouter(<TableHeader />);

  return { ...utils };
};

describe("TableHeader component", () => {
  it("render Header", () => {
    const { getByTestId } = renderTableHeader();
    const header = getByTestId("header");

    expect(header).toBeInTheDocument();
  });

  it("render Container", () => {
    const { getByTestId } = renderTableHeader();
    const container = getByTestId("container");

    expect(container).toBeInTheDocument();
  });

  it("render OptionContainer", () => {
    const { getByTestId } = renderTableHeader();
    const optionContainer = getByTestId("optionContainer");

    expect(optionContainer).toBeInTheDocument();
  });

  it("render OptionContainer", () => {
    const { getByTestId } = renderTableHeader();
    const optionContainer = getByTestId("optionContainer");

    expect(optionContainer).toBeInTheDocument();
  });

  it("render Options", () => {
    const { getAllByTestId } = renderTableHeader();
    const options = getAllByTestId(/option-/i);

    options.forEach((option) => expect(option).toBeInTheDocument());
  });

  it("render SortSelect", () => {
    const { getByTestId } = renderTableHeader();
    const sortSelect = getByTestId("sortSelect");

    expect(sortSelect).toBeInTheDocument();
  });

  it("Header to have style", () => {
    const { getByTestId } = renderTableHeader();
    const header = getByTestId("header");

    expect(header).toHaveStyle({
      display: "flex",
      height: "40px",
      marginBottom: "8px",
    });
  });

  it("Container to have style", () => {
    const { getByTestId } = renderTableHeader();
    const container = getByTestId("container");

    expect(container).toHaveStyle({
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    });
  });

  it("OptionContainer to have style", () => {
    const { getByTestId } = renderTableHeader();
    const optionContainer = getByTestId("optionContainer");

    expect(optionContainer).toHaveStyle({
      display: "flex",
      padding: "0 12px 0 30px",
    });
  });

  it("SortSelect to have style", () => {
    const { getByTestId } = renderTableHeader();
    const sortSelect = getByTestId("sortSelect");

    expect(sortSelect).toHaveStyle({
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "fit-content",
      height: "100%",
      padding: "6px 8px",
      marginRight: "16px",
      fontSize: "14px",
    });
  });

  it("Option to have style", () => {
    const { getAllByTestId } = renderTableHeader();
    const options = getAllByTestId(/option-/i);

    options.forEach((option) =>
      expect(option).toHaveStyle({
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "fit-content",
        height: "100%",
        marginLeft: "5px",
        padding: "0 30px",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        fontSize: "14px",
        textDecoration: "none",
      })
    );
  });
});
