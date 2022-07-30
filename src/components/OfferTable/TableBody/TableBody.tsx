import Offer from "./Offer/Offer";
import Footer from "../../Footer/Footer";
import { Body } from "./styles/TableBodyStyles";
import { IOffersData } from "../OfferTable";
import useScroll from "../../../hook/useScroll";

interface ITableBodyProps {
  offersData: IOffersData[];
}

export default function TableBody({ offersData }: ITableBodyProps) {
  const [bodyRef, scrollHandler] = useScroll();

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
