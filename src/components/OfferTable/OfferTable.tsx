import TableHeader from "./TableHeader/TableHeader";
import TableBody from "./TableBody/TableBody";
import { Table } from "./styles/OfferTableStyles";

export interface IOffersData {
  id: string;
  title: string;
  img: string;
  price: string;
  date: string;
  office: string;
  location: string;
}

interface IOfferTableProps {
  offersData: IOffersData[];
}

export default function OfferTable({ offersData }: IOfferTableProps) {
  return (
    <Table data-testid="table">
      <TableHeader />
      <TableBody offersData={offersData} />
    </Table>
  );
}
