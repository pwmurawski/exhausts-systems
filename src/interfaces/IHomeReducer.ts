interface ISetOfferIsMouseHoverAction {
  type: "setOfferIsMouseHover";
  id: string | null;
}

export interface IState {
  offerIsMouseHover: string | null;
}

export type ActionType = ISetOfferIsMouseHoverAction;
