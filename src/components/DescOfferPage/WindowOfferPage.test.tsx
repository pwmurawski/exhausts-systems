import { render } from "@testing-library/react";
import WindowOfferPage from "./WindowOfferPage";

const headerContext = "headerContext";
const bodyContext = "bodyContext";

const returnWindowOfferPage = () => {
  const utils = render(
    <WindowOfferPage headerContext={headerContext} bodyContext={bodyContext} />
  );

  return { ...utils };
};

describe("WindowOfferPage component", () => {
  it("render Container", () => {
    const { getByTestId } = returnWindowOfferPage();
    const container = getByTestId("conWindowOfferPage");

    expect(container).toBeInTheDocument();
  });

  it("render Header", () => {
    const { getByTestId } = returnWindowOfferPage();
    const header = getByTestId("headerContext");

    expect(header).toBeInTheDocument();
  });

  it("render Body", () => {
    const { getByTestId } = returnWindowOfferPage();
    const body = getByTestId("bodyContext");

    expect(body).toBeInTheDocument();
  });

  it("Container to have style", () => {
    const { getByTestId } = returnWindowOfferPage();
    const container = getByTestId("conWindowOfferPage");

    expect(container).toHaveStyle({
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginBottom: "40px",
      borderRadius: "5px",
    });
  });

  it("Header to have style", () => {
    const { getByTestId } = returnWindowOfferPage();
    const header = getByTestId("headerContext");

    expect(header).toHaveStyle({
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      padding: "12px 20px",
      height: "52px",
      fontSize: "20px",
      fontWeight: "600",
    });
  });

  it("Body to have style", () => {
    const { getByTestId } = returnWindowOfferPage();
    const body = getByTestId("bodyContext");

    expect(body).toHaveStyle({
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      padding: "20px",
      height: "fit-content",
      fontSize: "16px",
    });
  });

  it("render props", () => {
    const { getByText, getByTestId, rerender } = returnWindowOfferPage();
    const header = getByText("headerContext");
    const body = getByText("bodyContext");

    expect(header).toBeInTheDocument();
    expect(body).toBeInTheDocument();

    rerender(
      <WindowOfferPage
        headerContext={<div data-testid="header1">headerContext</div>}
        bodyContext={<div data-testid="body1">bodyContext</div>}
      />
    );

    const headerTestId = getByTestId("header1");
    const bodyTestId = getByTestId("body1");

    expect(headerTestId).toBeInTheDocument();
    expect(bodyTestId).toBeInTheDocument();
  });
});
