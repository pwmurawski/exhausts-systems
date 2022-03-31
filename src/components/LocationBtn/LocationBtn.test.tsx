import { fireEvent, render } from "@testing-library/react";
import LocationBtn from "./LocationBtn";

const renderLocationBtn = () => {
  const utils = render(<LocationBtn />);

  return { ...utils };
};

describe("LocationBtn component", () => {
  it("render Container", () => {
    const { getByTestId } = renderLocationBtn();
    const container = getByTestId("locationBtnContainer");

    expect(container).toBeInTheDocument();
  });

  it("render Text", () => {
    const { getByTestId } = renderLocationBtn();
    const text = getByTestId("text");

    expect(text).toBeInTheDocument();
  });

  it("render Icon", () => {
    const { getByTestId } = renderLocationBtn();
    const icon = getByTestId("icon");

    expect(icon).toBeInTheDocument();
  });

  it("render Svg", () => {
    const { getByTestId } = renderLocationBtn();
    const svg = getByTestId("svg");

    expect(svg).toBeInTheDocument();
  });

  it("Container to have style", () => {
    const { getByTestId } = renderLocationBtn();
    const container = getByTestId("locationBtnContainer");

    expect(container).toHaveStyle({
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "150px",
      height: "36px",
      padding: "0 16px",
      marginTop: "6px",
      marginLeft: "20px",
      borderRadius: "20px",
      cursor: "pointer",
      transition: "background-color 300ms",
    });
  });

  it("Text to have style", () => {
    const { getByTestId } = renderLocationBtn();
    const text = getByTestId("text");

    expect(text).toHaveStyle({
      fontSize: "13px",
      fontWeight: "600",
    });
  });

  it("Icon to have style", () => {
    const { getByTestId } = renderLocationBtn();
    const icon = getByTestId("icon");

    expect(icon).toHaveStyle({
      width: "18px",
      height: "18px",
      transition: "transform 300ms",
      transform: "none",
    });
  });

  it("click on the Container, rotate the Icon 180deg", () => {
    const { getByTestId } = renderLocationBtn();
    const container = getByTestId("locationBtnContainer");
    const icon = getByTestId("icon");

    expect(icon).toHaveStyle("transform: none");
    fireEvent.click(container);
    expect(icon).toHaveStyle("transform: rotate(180deg)");
  });
});
