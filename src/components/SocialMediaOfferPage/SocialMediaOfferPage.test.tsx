import { render } from "@testing-library/react";
import SocialMediaOfferPage from "./SocialMediaOfferPage";

const renderSocialMediaOfferPage = () => {
  const utils = render(<SocialMediaOfferPage />);

  return { ...utils };
};

describe("SocialMediaOfferPage component", () => {
  it("render Container", () => {
    const { getByTestId } = renderSocialMediaOfferPage();
    const container = getByTestId("conSocialMediaOfferPage");

    expect(container).toBeInTheDocument();
  });

  it("render Info", () => {
    const { getAllByTestId } = renderSocialMediaOfferPage();
    const infoArr = getAllByTestId("info");

    infoArr.forEach((info) => expect(info).toBeInTheDocument());
  });

  it("render Icon", () => {
    const { getAllByTestId } = renderSocialMediaOfferPage();
    const iconArr = getAllByTestId("icon");

    iconArr.forEach((icon) => expect(icon).toBeInTheDocument());
  });

  it("render Img", () => {
    const { getAllByTestId } = renderSocialMediaOfferPage();
    const imgArr = getAllByTestId("imgSocialMediaOfferPage");

    imgArr.forEach((img) => expect(img).toBeInTheDocument());
  });

  it("render Name", () => {
    const { getAllByTestId } = renderSocialMediaOfferPage();
    const nameArr = getAllByTestId("name");

    nameArr.forEach((name) => expect(name).toBeInTheDocument());
  });

  it("render InfoText", () => {
    const { getAllByTestId } = renderSocialMediaOfferPage();
    const infoTextArr = getAllByTestId("infoText");

    infoTextArr.forEach((infoText) => expect(infoText).toBeInTheDocument());
  });

  it("Container to have style", () => {
    const { getByTestId } = renderSocialMediaOfferPage();
    const container = getByTestId("conSocialMediaOfferPage");

    expect(container).toHaveStyle({
      boxSizing: "border-box",
      position: "absolute",
      left: "0",
      bottom: "-35px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      padding: "0 5px",
      height: "fit-content",
    });
  });

  it("Info to have style", () => {
    const { getAllByTestId } = renderSocialMediaOfferPage();
    const infoArr = getAllByTestId("info");

    infoArr.forEach((info) =>
      expect(info).toHaveStyle({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "180px",
        width: "100%",
        height: "75px",
        margin: "0 5px",
        borderRadius: "5px",
        cursor: "pointer",
      })
    );
  });

  it("Icon to have style", () => {
    const { getAllByTestId } = renderSocialMediaOfferPage();
    const iconArr = getAllByTestId("icon");

    iconArr.forEach((icon) =>
      expect(icon).toHaveStyle({
        position: "absolute",
        top: "-15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "30px",
        height: "30px",
        borderRadius: "150px",
        overflow: "hidden",
      })
    );
  });

  it("Img to have style", () => {
    const { getAllByTestId } = renderSocialMediaOfferPage();
    const imgArr = getAllByTestId("imgSocialMediaOfferPage");

    imgArr.forEach((img) =>
      expect(img).toHaveStyle({
        width: "28px",
        height: "28px",
      })
    );
  });

  it("Name to have style", () => {
    const { getAllByTestId } = renderSocialMediaOfferPage();
    const nameArr = getAllByTestId("name");

    nameArr.forEach((name) => expect(name).toHaveStyle("font-size: 14px"));
  });

  it("InfoText to have style", () => {
    const { getAllByTestId } = renderSocialMediaOfferPage();
    const infoTextArr = getAllByTestId("infoText");

    infoTextArr.forEach((infoText) =>
      expect(infoText).toHaveStyle("font-size: 11px")
    );
  });
});
