import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import OfferTable from "./OfferTable";

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
    wrapper: BrowserRouter,
  });
};

const renderOfferTable = () => {
  const utils = renderWithRouter(<OfferTable offersData={offersData} />);

  return { ...utils };
};

describe("OfferTable component", () => {
  it("render Table", () => {
    const { getByTestId } = renderOfferTable();
    const table = getByTestId("table");

    expect(table).toBeInTheDocument();
  });

  it("render Header", () => {
    const { getByTestId } = renderOfferTable();
    const header = getByTestId("header");

    expect(header).toBeInTheDocument();
  });

  it("render Body", () => {
    const { getByTestId } = renderOfferTable();
    const body = getByTestId("body");

    expect(body).toBeInTheDocument();
  });

  it("render Offers", () => {
    const { getAllByTestId } = renderOfferTable();
    const offers = getAllByTestId(/offer-/i);

    expect(offers.length).toBe(offersData.length);
  });

  it("Table to have style", () => {
    const { getByTestId } = renderOfferTable();
    const table = getByTestId("table");

    expect(table).toHaveStyle({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
    });
  });
});
