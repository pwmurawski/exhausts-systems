import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

const renderWithRouter = (children: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(children, {
    wrapper: BrowserRouter,
  });
};

const renderHome = () => {
  const utils = renderWithRouter(<Home />);

  return { ...utils };
};

describe("Home component", () => {
  it("render Wrapper", () => {
    const { getByTestId } = renderHome();
    const wrapper = getByTestId("homeWrapper");

    expect(wrapper).toBeInTheDocument();
  });

  it("render Container", () => {
    const { getByTestId } = renderHome();
    const container = getByTestId("homeContainer");

    expect(container).toBeInTheDocument();
  });

  it("render OfferTable", () => {
    const { getByTestId } = renderHome();
    const offerTable = getByTestId("table");

    expect(offerTable).toBeInTheDocument();
  });

  it("render MapContainer", () => {
    const { getByTestId } = renderHome();
    const mapContainer = getByTestId("mapContainer");

    expect(mapContainer).toBeInTheDocument();
  });

  it("render Map", () => {
    const { getByTestId } = renderHome();
    const map = getByTestId("map");

    expect(map).toBeInTheDocument();
  });

  it("Wrapper to have style", () => {
    const { getByTestId } = renderHome();
    const wrapper = getByTestId("homeWrapper");

    expect(wrapper).toHaveStyle({
      display: "flex",
      width: "100%",
      height: "calc(100vh - 151px)",
    });
  });

  it("Container to have style", () => {
    const { getByTestId } = renderHome();
    const container = getByTestId("homeContainer");

    expect(container).toHaveStyle({
      flex: "1",
    });
  });

  it("MapContainer to have style", () => {
    const { getByTestId } = renderHome();
    const mapContainer = getByTestId("mapContainer");

    expect(mapContainer).toHaveStyle({
      flex: "1",
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
      transition: "flex 200ms",
    });
  });
});
