import themeInit from "./helpers/themeInit";

interface IThemeAction {
  type: "change-theme";
}

export interface IState {
  theme: string;
}

export type ActionType = IThemeAction;

export const reducer = (state: IState, action: ActionType) => {
  let theme: string | null = null;

  switch (action.type) {
    case "change-theme":
      theme = state.theme === "light" ? "dark" : "light";
      window.localStorage.setItem("theme", theme);
      return { ...state, theme };
    default:
      throw new Error(`There is no such action: ${action.type}`);
  }
};

export const initialState = {
  theme: themeInit(),
};
