interface ISetOfferIsMouseHoverAction {
  type: "setOfferIsMouseHover";
  id: string | null;
}

export interface IState {
  offerIsMouseHover: string | null;
}

export type ActionType = ISetOfferIsMouseHoverAction;

export const homeReducer = (state: IState, action: ActionType) => {
  switch (action.type) {
    case "setOfferIsMouseHover":
      return { ...state, offerIsMouseHover: action.id };
    default:
      throw new Error("There is no such action");
  }
};

export const initialState = {
  offerIsMouseHover: null,
};
