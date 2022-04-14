import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import BackBtn from "./BackBtn";

const renderWithRouter = (children: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(children, {
    wrapper: BrowserRouter,
  });
};

const renderBackBtn = () => {
  const utils = renderWithRouter(<BackBtn left="0" top="0" />);

  return { ...utils };
};

describe("BackBtn component", () => {
  it("render Container ", () => {
    const { getByTestId } = renderBackBtn();
    const container = getByTestId("conBackBtn");

    expect(container).toBeInTheDocument();
  });

  it("render BackBtnIcon", () => {
    const { getByTestId } = renderBackBtn();
    const container = getByTestId("backBtnIcon");

    expect(container).toBeInTheDocument();
  });

  it("Container to have style", () => {
    const { getByTestId } = renderBackBtn();
    const container = getByTestId("conBackBtn");

    expect(container).toHaveStyle({
      position: "absolute",
      left: "0",
      top: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "30px",
      height: "30px",
      backgroundColor: "rgba(250, 250, 250, 0.6)",
      borderRadius: "20px",
      cursor: "pointer",
      transition: "border-radius 300ms,transform 300ms",
    });
  });

  it("change props", () => {
    const { getByTestId, rerender } = renderBackBtn();
    const container = getByTestId("conBackBtn");

    expect(container).toHaveStyle({
      left: "0",
      top: "0",
    });

    rerender(<BackBtn left="5px" top="5px" />);

    expect(container).toHaveStyle({
      left: "5px",
      top: "5px",
    });
  });
});
