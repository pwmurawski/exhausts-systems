import TableHeader from "./TableHeader/TableHeader";
import TableBody from "./TableBody/TableBody";
import { Table } from "./styles/OfferTableStyles";

interface IOfferTableProps {
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

export default function OfferTable({ offersData }: IOfferTableProps) {
  return (
    <Table data-testid="table">
      <TableHeader />
      <TableBody offersData={offersData} />
    </Table>
  );
}
