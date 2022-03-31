import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import TableBody from "./TableBody";

const offersData = [
  {
    id: "1",
    title: "test1",
    img: "img1",
    price: "111",
    date: "test date1",
    office: "test office1",
    location: "test location1",
  },
  {
    id: "2",
    title: "test2",
    img: "img2",
    price: "222",
    date: "test date2",
    office: "test office2",
    location: "test location2",
  },
];

const renderWithRouter = (children: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(children, {
    container: document.body.appendChild(document.createElement("table")),
    wrapper: BrowserRouter,
  });
};

const renderTableBody = () => {
  const utils = renderWithRouter(<TableBody offersData={offersData} />);

  return { ...utils };
};

describe("TableBody component", () => {
  it("render Body", () => {
    const { getByTestId } = renderTableBody();
    const body = getByTestId("body");

    expect(body).toBeInTheDocument();
  });

  it("render Offers", async () => {
    const { findAllByTestId } = renderTableBody();
    const offers = await findAllByTestId(/offer-/i);

    expect(offers.length).toBe(offersData.length);
  });

  it("render Footer", () => {
    const { getByTestId } = renderTableBody();
    const footer = getByTestId("footer");

    expect(footer).toBeInTheDocument();
  });

  it("Body to have style", () => {
    const { getByTestId } = renderTableBody();
    const body = getByTestId("body");

    expect(body).toHaveStyle({
      display: "flex",
      flexDirection: "column",
      height: "100%",
      paddingTop: "2px",
      overflowY: "scroll",
    });
  });

  it("Offer to have style", async () => {
    const { findAllByTestId } = renderTableBody();
    const offers = await findAllByTestId(/offer-/i);

    offers.forEach((offer) => {
      expect(offer).toHaveStyle({
        display: "flex",
        height: "fit-content",
        margin: "0 10px 12px",
        borderRadius: "10px",
      });
    });
  });

  it("Footer to have style", () => {
    const { getByTestId } = renderTableBody();
    const footer = getByTestId("footer");

    expect(footer).toHaveStyle({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    });
  });
});
