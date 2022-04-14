import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import OfferPage from "./OfferPage";

const renderWithRouter = (children: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(children, {
    wrapper: BrowserRouter,
  });
};

const renderOfferPage = () => {
  const utils = renderWithRouter(<OfferPage />);

  return { ...utils };
};

describe("OfferPage component", () => {
  it("render Wrapper", () => {
    const { getByTestId } = renderOfferPage();
    const wrapper = getByTestId("wrapperOfferPage");

    expect(wrapper).toBeInTheDocument();
  });

  it("render Container", () => {
    const { getByTestId } = renderOfferPage();
    const container = getByTestId("offerPageContainer");

    expect(container).toBeInTheDocument();
  });

  it("render OfferPageContent", () => {
    const { getByTestId } = renderOfferPage();
    const offerPageContent = getByTestId("conOfferPageContent");

    expect(offerPageContent).toBeInTheDocument();
  });

  it("render MapContainer", () => {
    const { getByTestId } = renderOfferPage();
    const mapContainer = getByTestId("mapContainer");

    expect(mapContainer).toBeInTheDocument();
  });

  it("render Map", () => {
    const { getByTestId } = renderOfferPage();
    const map = getByTestId("map");

    expect(map).toBeInTheDocument();
  });

  it("Wrapper to have style", () => {
    const { getByTestId } = renderOfferPage();
    const wrapper = getByTestId("wrapperOfferPage");

    expect(wrapper).toHaveStyle({
      display: "flex",
      width: "100vw",
    });
  });

  it("Container to have style", () => {
    const { getByTestId } = renderOfferPage();
    const container = getByTestId("offerPageContainer");

    expect(container).toHaveStyle("flex: 1");
  });

  it("MapContainer to have style", () => {
    const { getByTestId } = renderOfferPage();
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
