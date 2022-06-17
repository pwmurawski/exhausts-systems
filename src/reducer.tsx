import themeInit from "./helpers/themeInit";

interface IThemeAction {
  type: "change-theme";
}

interface IOfferIsMouseHoverAction {
  type: "setOfferIsMouseHover";
  id: string | null;
}

export interface IState {
  theme: string;
  offerIsMouseHover: string | null;
}

export type ActionType = IThemeAction | IOfferIsMouseHoverAction;

export const reducer = (state: IState, action: ActionType) => {
  let theme: string | null = null;

  switch (action.type) {
    case "change-theme":
      theme = state.theme === "light" ? "dark" : "light";
      window.localStorage.setItem("theme", theme);
      return { ...state, theme };

    case "setOfferIsMouseHover":
      return { ...state, offerIsMouseHover: action.id };

    default:
      throw new Error("There is no such action");
  }
};

export const initialState: IState = {
  theme: themeInit(),
  offerIsMouseHover: null,
};
