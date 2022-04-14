import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import OfferPageContent from "./OfferPageContent";

const renderWithRouter = (children: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(children, {
    wrapper: BrowserRouter,
  });
};

const renderOfferPageContent = () => {
  const utils = renderWithRouter(<OfferPageContent />);

  return { ...utils };
};

describe("OfferPageContent component", () => {
  it("render Container", () => {
    const { getByTestId } = renderOfferPageContent();
    const container = getByTestId("conOfferPageContent");

    expect(container).toBeInTheDocument();
  });

  it("render HeaderOfferPage", () => {
    const { getByTestId } = renderOfferPageContent();
    const headerOfferPage = getByTestId("conHeaderOfferPage");

    expect(headerOfferPage).toBeInTheDocument();
  });

  it("render GalleryOfferPage", () => {
    const { getByTestId } = renderOfferPageContent();
    const galleryOfferPage = getByTestId("conGalleryOfferPage");

    expect(galleryOfferPage).toBeInTheDocument();
  });

  it("render WindowOfferPage", () => {
    const { getAllByTestId } = renderOfferPageContent();
    const windowOfferPageArr = getAllByTestId("conWindowOfferPage");

    windowOfferPageArr.forEach((windowOfferPage) =>
      expect(windowOfferPage).toBeInTheDocument()
    );
  });

  it("Container to have style", () => {
    const { getByTestId } = renderOfferPageContent();
    const container = getByTestId("conOfferPageContent");

    expect(container).toHaveStyle({
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: "0 10px",
      overflowY: "scroll",
    });
  });
});
