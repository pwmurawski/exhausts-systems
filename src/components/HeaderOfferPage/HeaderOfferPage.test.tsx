import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderOfferPage from "./HeaderOfferPage";

const renderWithRouter = (children: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(children, {
    wrapper: BrowserRouter,
  });
};

const renderHeaderOfferPage = () => {
  const utils = renderWithRouter(<HeaderOfferPage />);

  return { ...utils };
};

describe("HeaderOfferPage component", () => {
  it("render Container", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const container = getByTestId("conHeaderOfferPage");

    expect(container).toBeInTheDocument();
  });

  it("render BackBtn", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const backBtn = getByTestId("conBackBtn");

    expect(backBtn).toBeInTheDocument();
  });

  it("render Logo", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const logo = getByTestId("logo");

    expect(logo).toBeInTheDocument();
  });

  it("render Img", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const img = getByTestId("img");

    expect(img).toBeInTheDocument();
  });

  it("render Text", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const text = getByTestId("text");

    expect(text).toBeInTheDocument();
  });

  it("render Title", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const title = getByTestId("title");

    expect(title).toBeInTheDocument();
  });

  it("render Location", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const location = getByTestId("location");

    expect(location).toBeInTheDocument();
  });

  it("render LocationIcon", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const locationIcon = getByTestId("locationIcon");

    expect(locationIcon).toBeInTheDocument();
  });

  it("render LocationText", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const locationText = getByTestId("locationText");

    expect(locationText).toBeInTheDocument();
  });

  it("render Price", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const price = getByTestId("price");

    expect(price).toBeInTheDocument();
  });

  it("render SocialMediaOfferPage", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const socialMediaOfferPage = getByTestId("conSocialMediaOfferPage");

    expect(socialMediaOfferPage).toBeInTheDocument();
  });

  it("Container to have style", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const container = getByTestId("conHeaderOfferPage");

    expect(container).toHaveStyle({
      position: "relative",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      height: "fit-content",
      padding: "40px 20px 70px",
      marginBottom: "80px",
      backgroundSize: "5%",
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",
    });
  });

  it("Logo to have style", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const logo = getByTestId("logo");

    expect(logo).toHaveStyle({
      display: "flex",
      alignItems: "center",
      maxWidth: "130px",
      maxHeight: "130px",
      minWidth: "130px",
      minHeight: "130px",
      borderRadius: "150px",
      backgroundColor: "rgba(250,250,250,0.6)",
      border: "8px solid rgb(250,250,250)",
      overflow: "hidden",
      boxShadow: "0px 1px 3px black",
    });
  });

  it("Img to have style", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const img = getByTestId("img");

    expect(img).toHaveStyle({
      maxWidth: "100%",
      height: "auto",
    });
  });

  it("Text to have style", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const text = getByTestId("text");

    expect(text).toHaveStyle({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: "16px",
      color: "white",
      textShadow: "1px 1px black",
    });
  });

  it("Title to have style", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const title = getByTestId("title");

    expect(title).toHaveStyle({
      fontSize: "23px",
      margin: "0 0 8px 0",
    });
  });

  it("Location to have style", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const location = getByTestId("location");

    expect(location).toHaveStyle({
      display: "flex",
      alignItems: "center",
      margin: "0 0 8px 0",
    });
  });

  it("LocationIcon to have style", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const locationIcon = getByTestId("locationIcon");

    expect(locationIcon).toHaveStyle({
      width: "20px",
      height: "20px",
    });
  });

  it("LocationText to have style", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const locationText = getByTestId("locationText");

    expect(locationText).toHaveStyle({
      fontSize: "15px",
      fontWeight: "600",
      marginLeft: "10px",
    });
  });

  it("Price to have style", () => {
    const { getByTestId } = renderHeaderOfferPage();
    const price = getByTestId("price");

    expect(price).toHaveStyle({
      fontSize: "18px",
      fontWeight: "600",
      color: "rgb(0,245,0)",
    });
  });
});
