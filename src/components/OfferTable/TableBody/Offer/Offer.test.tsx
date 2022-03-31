import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import Offer from "./Offer";

const testId = 0;
const id = "1";
const testTitle = "testTitle";
const testDate = "testDate";
const testPrice = "testPrice";
const testLocation = "testLocation";
const testOffice = "testOffice";
const testImg = "testImg";

const renderWithRouter = (children: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(children, {
    container: document.body.appendChild(document.createElement("tbody")),
    wrapper: BrowserRouter,
  });
};

const renderOffer = () => {
  const utils = renderWithRouter(
    <Offer
      id={id}
      testId={testId}
      title={testTitle}
      date={testDate}
      price={testPrice}
      location={testLocation}
      office={testOffice}
      img={testImg}
    />
  );

  return { ...utils };
};

describe("Offer component", () => {
  it("render Container", () => {
    const { getByTestId } = renderOffer();
    const container = getByTestId(`offer-${testId}`);

    expect(container).toBeInTheDocument();
  });

  it("render Center", () => {
    const { getByTestId } = renderOffer();
    const center = getByTestId("center");

    expect(center).toBeInTheDocument();
  });

  it("render ImgContainer", () => {
    const { getByTestId } = renderOffer();
    const imgContainer = getByTestId("imgContainer");

    expect(imgContainer).toBeInTheDocument();
  });

  it("render Img", () => {
    const { getByTestId } = renderOffer();
    const img = getByTestId("img");

    expect(img).toBeInTheDocument();
  });

  it("render ContentContainer", () => {
    const { getByTestId } = renderOffer();
    const contentContainer = getByTestId("contentContainer");

    expect(contentContainer).toBeInTheDocument();
  });

  it("render InfoTopLine", () => {
    const { getByTestId } = renderOffer();
    const infoTopLine = getByTestId("infoTopLine");

    expect(infoTopLine).toBeInTheDocument();
  });

  it("render Title", () => {
    const { getByTestId } = renderOffer();
    const title = getByTestId("title");

    expect(title).toBeInTheDocument();
  });

  it("render Right", () => {
    const { getByTestId } = renderOffer();
    const right = getByTestId("right");

    expect(right).toBeInTheDocument();
  });

  it("render PriceRanges", () => {
    const { getByTestId } = renderOffer();
    const priceRanges = getByTestId("priceRanges");

    expect(priceRanges).toBeInTheDocument();
  });

  it("render TimeContainer", () => {
    const { getByTestId } = renderOffer();
    const timeContainer = getByTestId("timeContainer");

    expect(timeContainer).toBeInTheDocument();
  });

  it("render Time", () => {
    const { getByTestId } = renderOffer();
    const time = getByTestId("time");

    expect(time).toBeInTheDocument();
  });

  it("render InfoBottomLine", () => {
    const { getByTestId } = renderOffer();
    const infoBottomLine = getByTestId("infoBottomLine");

    expect(infoBottomLine).toBeInTheDocument();
  });

  it("render Left", () => {
    const { getByTestId } = renderOffer();
    const left = getByTestId("left");

    expect(left).toBeInTheDocument();
  });

  it("render InfoPins", () => {
    const { getAllByTestId } = renderOffer();
    const infoPins = getAllByTestId(/infoPin-/i);

    infoPins.forEach((infoPin) => expect(infoPin).toBeInTheDocument());
  });

  it("render Icon Office", () => {
    const { getByTestId } = renderOffer();
    const icon = getByTestId("iconOffice");

    expect(icon).toBeInTheDocument();
  });

  it("render Icon Location", () => {
    const { getByTestId } = renderOffer();
    const icon = getByTestId("iconLocation");

    expect(icon).toBeInTheDocument();
  });

  it("render Names", () => {
    const { getAllByTestId } = renderOffer();
    const names = getAllByTestId(/nameInfoPin-/i);

    names.forEach((name) => expect(name).toBeInTheDocument());
  });

  it("render Right2", () => {
    const { getByTestId } = renderOffer();
    const right2 = getByTestId("right2");

    expect(right2).toBeInTheDocument();
  });

  it("render Btn", () => {
    const { getByTestId } = renderOffer();
    const btn = getByTestId("btn");

    expect(btn).toBeInTheDocument();
  });

  it("render ObservationIconSvg", () => {
    const { getByTestId } = renderOffer();
    const observationIconSvg = getByTestId("observationIconSvg");

    expect(observationIconSvg).toBeInTheDocument();
  });

  it("Container to have style", () => {
    const { getByTestId } = renderOffer();
    const container = getByTestId(`offer-${testId}`);

    expect(container).toHaveStyle({
      display: "flex",
      height: "fit-content",
      margin: "0 10px 12px",
      borderRadius: "10px",
      cursor: "pointer",
    });
  });

  it("Center to have style", () => {
    const { getByTestId } = renderOffer();
    const center = getByTestId("center");

    expect(center).toHaveStyle({
      display: "flex",
      alignItems: "center",
      padding: "0",
    });
  });

  it("ImgContainer to have style", () => {
    const { getByTestId } = renderOffer();
    const imgContainer = getByTestId("imgContainer");

    expect(imgContainer).toHaveStyle({
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "160px",
      minWidth: "160px",
      maxHeight: "160px",
      minHeight: "160px",
      margin: "5px",
      padding: "0",
      overflow: "hidden",
      borderRadius: "10px",
    });
  });

  it("Img to have style", () => {
    const { getByTestId } = renderOffer();
    const img = getByTestId("img");

    expect(img).toHaveStyle({
      maxWidth: "100%",
      height: "auto",
    });
  });

  it("ContentContainer to have style", () => {
    const { getByTestId } = renderOffer();
    const contentContainer = getByTestId("contentContainer");

    expect(contentContainer).toHaveStyle({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      padding: "20px",
    });
  });

  it("InfoTopLine to have style", () => {
    const { getByTestId } = renderOffer();
    const infoTopLine = getByTestId("infoTopLine");

    expect(infoTopLine).toHaveStyle({
      display: "flex",
      justifyContent: "space-between",
      flex: "1",
    });
  });

  it("Title to have style", () => {
    const { getByTestId } = renderOffer();
    const title = getByTestId("title");

    expect(title).toHaveStyle({
      wordWrap: "break-word",
      margin: "0 5px 0 0",
      fontSize: "16px",
    });
  });

  it("Left to have style", () => {
    const { getByTestId } = renderOffer();
    const left = getByTestId("left");

    expect(left).toHaveStyle({
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
    });
  });

  it("Right to have style", () => {
    const { getByTestId } = renderOffer();
    const right = getByTestId("right");

    expect(right).toHaveStyle({
      display: "flex",
      flexDirection: "column",
    });
  });

  it("PriceRanges to have style", () => {
    const { getByTestId } = renderOffer();
    const priceRanges = getByTestId("priceRanges");

    expect(priceRanges).toHaveStyle({
      textAlign: "end",
      color: "rgb(0, 200, 0)",
      fontSize: "14px",
      whiteSpace: "nowrap",
    });
  });

  it("TimeContainer to have style", () => {
    const { getByTestId } = renderOffer();
    const timeContainer = getByTestId("timeContainer");

    expect(timeContainer).toHaveStyle({
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      height: "100%",
      marginTop: "5px",
    });
  });

  it("Time to have style", () => {
    const { getByTestId } = renderOffer();
    const time = getByTestId("time");

    expect(time).toHaveStyle({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "fit-content",
      height: "fit-content",
      padding: "5px 10px",
      borderRadius: "20px",
      fontSize: "12px",
    });
  });

  it("InfoBottomLine to have style", () => {
    const { getByTestId } = renderOffer();
    const infoBottomLine = getByTestId("infoBottomLine");

    expect(infoBottomLine).toHaveStyle({
      flex: "1",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
    });
  });

  it("InfoPin 0 to have style", () => {
    const { getByTestId } = renderOffer();
    const infoPin = getByTestId("infoPin-0");

    expect(infoPin).toHaveStyle({
      display: "flex",
      alignItems: "center",
      width: "fit-content",
      height: "fit-content",
      padding: "5px 10px",
      margin: "2px 10px 0 0",
      fontSize: "12px",
      borderRadius: "20px",
    });
  });

  it("InfoPin 1 to have style", () => {
    const { getByTestId } = renderOffer();
    const infoPin = getByTestId("infoPin-1");

    expect(infoPin).toHaveStyle({
      display: "flex",
      alignItems: "center",
      width: "fit-content",
      height: "fit-content",
      padding: "5px 10px",
      margin: "2px 10px 0 0",
      fontSize: "12px",
      borderRadius: "20px",
    });
  });

  it("Names to have style", () => {
    const { getAllByTestId } = renderOffer();
    const names = getAllByTestId(/nameInfoPin-/i);

    names.forEach((name) =>
      expect(name).toHaveStyle({
        marginLeft: "5px",
      })
    );
  });

  it("Btn to have style", () => {
    const { getByTestId } = renderOffer();
    const btn = getByTestId("btn");

    expect(btn).toHaveStyle({
      margin: "0 3px 0 0",
      padding: "0",
      border: "0",
      background: "transparent",
    });
  });

  it("render props Title", () => {
    const { getByText } = renderOffer();
    const propsTitle = getByText(testTitle);

    expect(propsTitle).toBeInTheDocument();
  });

  it("render props Date", () => {
    const { getByText } = renderOffer();
    const propsDate = getByText(testDate);

    expect(propsDate).toBeInTheDocument();
  });

  it("render props Price", () => {
    const { getByText } = renderOffer();
    const propsPrice = getByText(`${testPrice} PLN`);

    expect(propsPrice).toBeInTheDocument();
  });

  it("render props Location", () => {
    const { getByText } = renderOffer();
    const propsLocation = getByText(testLocation);

    expect(propsLocation).toBeInTheDocument();
  });

  it("render props Office", () => {
    const { getByText } = renderOffer();
    const propsOffice = getByText(testOffice);

    expect(propsOffice).toBeInTheDocument();
  });

  it("render props Img", () => {
    const { getByTestId } = renderOffer();
    const img = getByTestId("img");

    expect(img).toHaveAttribute("src", testImg);
  });
});
