import { useEffect, useRef } from "react";
import Offer from "./Offer/Offer";
import Footer from "../../Footer/Footer";
import { Body } from "./styles/TableBodyStyles";
import { IOffersData } from "../OfferTable";
import useStateStorage from "../../../hook/useStateStorage";

interface ITableBodyProps {
  offersData: IOffersData[];
}

export default function TableBody({ offersData }: ITableBodyProps) {
  const [scroll, setScroll] = useStateStorage(
    "scrollOfferTable",
    "sessionStorage",
    0
  );
  const bodyRef = useRef<HTMLTableSectionElement>(null);

  const scrollHandler = (
    e: React.UIEvent<HTMLTableSectionElement, UIEvent>
  ) => {
    setScroll(e.currentTarget.scrollTop);
  };

  useEffect(() => {
    bodyRef.current?.scroll({ top: scroll });
  }, []);

  return (
    <Body data-testid="body" onScroll={scrollHandler} ref={bodyRef}>
      {offersData.map(
        ({ id, title, price, img, date, location, office }, index) => (
          <Offer
            key={id}
            id={id}
            testId={index}
            title={title}
            price={price}
            img={img}
            date={date}
            location={location}
            office={office}
          />
        )
      )}
      <Footer />
    </Body>
  );
}
