import { IOffersData } from "../components/OfferTable/OfferTable";

interface IThemeAction {
  type: "change-theme";
}

interface ISetOffersAction {
  type: "setOffers";
  offers: IOffersData[];
}

export interface IState {
  offers: IOffersData[];
  theme: string;
}

export type ActionType = ISetOffersAction | IThemeAction;
