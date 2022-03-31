import Offer from "./Offer/Offer";
import Footer from "../../Footer/Footer";
import { Body } from "./styles/TableBodyStyles";

interface ITableBodyProps {
  offersData: {
    id: string;
    title: string;
    img: string;
    price: string;
    date: string;
    office: string;
    location: string;
  }[];
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
