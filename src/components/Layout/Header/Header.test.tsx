import { render } from "@testing-library/react";
import Header from "./Header";

const renderHeader = () => {
  const utils = render(<Header />);

  return { ...utils };
};

describe("Header component", () => {
  it("render Container", () => {
    const { getByTestId } = renderHeader();
    const container = getByTestId("headerContainer");

    expect(container).toBeInTheDocument();
  });

  it("render Logo", () => {
    const { getByTestId } = renderHeader();
    const logo = getByTestId("logo");

    expect(logo).toBeInTheDocument();
  });

  it("render ToggleBtn", () => {
    const { getByTestId } = renderHeader();
    const toggleBtn = getByTestId("themeSwitch");

    expect(toggleBtn).toBeInTheDocument();
  });

  it("render Right", () => {
    const { getByTestId } = renderHeader();
    const right = getByTestId("right");

    expect(right).toBeInTheDocument();
  });

  it("render LoginButton", () => {
    const { getByTestId } = renderHeader();
    const loginButton = getByTestId("loginButton");

    expect(loginButton).toBeInTheDocument();
  });

  it("Container to have style", () => {
    const { getByTestId } = renderHeader();
    const container = getByTestId("headerContainer");

    expect(container).toHaveStyle({
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      height: "68px",
      padding: "0 24px 0 24px",
    });
  });

  it("Logo to have style", () => {
    const { getByTestId } = renderHeader();
    const logo = getByTestId("logo");

    expect(logo).toHaveStyle({
      margin: "0",
    });
  });

  it("Right to have style", () => {
    const { getByTestId } = renderHeader();
    const right = getByTestId("right");

    expect(right).toHaveStyle({
      display: "flex",
      justifyContent: "flex-end",
      flex: "1",
    });
  });

  it("LoginButton to have style", () => {
    const { getByTestId } = renderHeader();
    const loginButton = getByTestId("loginButton");

    expect(loginButton).toHaveStyle({
      width: "fit-content",
      height: "40px",
      padding: "8px 16px",
      border: "0",
      borderRadius: "20px",
      backgroundColor: "rgb(255, 64, 129)",
      color: "white",
      fontSize: "17px",
    });
  });
});
