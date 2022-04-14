import Offer from "./Offer/Offer";
import Footer from "../../Footer/Footer";
import { Body } from "./styles/TableBodyStyles";
import { IOffersData } from "../OfferTable";

interface ITableBodyProps {
  offersData: IOffersData[];
}

export default function TableBody({ offersData }: ITableBodyProps) {
  return (
    <Body data-testid="body">
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
