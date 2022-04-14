import { render } from "@testing-library/react";
import GalleryOfferPage from "./GalleryOfferPage";

const renderGalleryOfferPage = () => {
  const utils = render(<GalleryOfferPage />);

  return { ...utils };
};

describe("GalleryOfferPage component", () => {
  it("render Container", () => {
    const { getByTestId } = renderGalleryOfferPage();
    const container = getByTestId("conGalleryOfferPage");

    expect(container).toBeInTheDocument();
  });

  it("render Slider", () => {
    const { getByTestId } = renderGalleryOfferPage();
    const slider = getByTestId("slider");

    expect(slider).toBeInTheDocument();
  });

  it("render Radio", () => {
    const { getAllByTestId } = renderGalleryOfferPage();
    const radioArr = getAllByTestId(/radio-/i);

    radioArr.forEach((radio) => expect(radio).toBeInTheDocument());
  });

  it("render Slide", () => {
    const { getAllByTestId } = renderGalleryOfferPage();
    const slideArr = getAllByTestId(/slide-/i);

    slideArr.forEach((slide) => expect(slide).toBeInTheDocument());
  });

  it("render Img", () => {
    const { getAllByTestId } = renderGalleryOfferPage();
    const imgArr = getAllByTestId(/img-/i);

    imgArr.forEach((img) => expect(img).toBeInTheDocument());
  });

  it("Container to have style", () => {
    const { getByTestId } = renderGalleryOfferPage();
    const container = getByTestId("conGalleryOfferPage");

    expect(container).toHaveStyle("margin-bottom: 60px");
  });

  it("Slider to have style", () => {
    const { getByTestId } = renderGalleryOfferPage();
    const slider = getByTestId("slider");

    expect(slider).toHaveStyle({
      height: "70vw",
      position: "relative",
    });
  });

  it("Radio to have style", () => {
    const { getAllByTestId } = renderGalleryOfferPage();
    const radioArr = getAllByTestId(/radio-/i);

    radioArr.forEach((radio) => expect(radio).toHaveStyle("display: none"));
  });

  it("Slide to have style", () => {
    const { getAllByTestId } = renderGalleryOfferPage();
    const slideArr = getAllByTestId(/slide-/i);

    slideArr.forEach((slide) =>
      expect(slide).toHaveStyle({
        margin: "auto",
        width: "70%",
        height: "100%",
        position: "absolute",
        left: "0",
        right: "0",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "transform 0.4s ease",
      })
    );
  });

  it("Img to have style", () => {
    const { getAllByTestId } = renderGalleryOfferPage();
    const imgArr = getAllByTestId(/img-/i);

    imgArr.forEach((img) =>
      expect(img).toHaveStyle({
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "5px",
      })
    );
  });
});
