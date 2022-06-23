import { ActionType, IState } from "../interfaces/IHomeReducer";

export const homeReducer = (state: IState, action: ActionType) => {
  switch (action.type) {
    case "setOfferIsMouseHover":
      return { ...state, offerIsMouseHover: action.id };
    default:
      throw new Error("There is no such action");
  }
};

export const initialState: IState = {
  offerIsMouseHover: null,
};
