import themeInit from "../helpers/themeInit";
import { ActionType, IState } from "../interfaces/IGlobalReducer";

export const globalReducer = (state: IState, action: ActionType) => {
  let theme: string | null = null;

  switch (action.type) {
    case "setOffers":
      return { ...state, offers: action.offers };

    case "change-theme":
      theme = state.theme === "light" ? "dark" : "light";
      window.localStorage.setItem("theme", theme);
      return { ...state, theme };
    default:
      throw new Error("There is no such action");
  }
};

export const initialState: IState = {
  offers: [],
  theme: themeInit(),
};
