import { render } from "@testing-library/react";
import Footer from "./Footer";

const renderFooter = () => {
  const utils = render(<Footer />, {
    container: document.body.appendChild(document.createElement("tbody")),
  });

  return { ...utils };
};

describe("Footer component", () => {
  it("render Container", () => {
    const { getByTestId } = renderFooter();
    const footer = getByTestId("footer");

    expect(footer).toBeInTheDocument();
  });

  it("render FooterText", () => {
    const { getByTestId } = renderFooter();
    const footerText = getByTestId("footerText");

    expect(footerText).toBeInTheDocument();
  });

  it("Container to have style", () => {
    const { getByTestId } = renderFooter();
    const footer = getByTestId("footer");

    expect(footer).toHaveStyle({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    });
  });
});
