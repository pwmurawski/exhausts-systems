interface IState {
  theme: string;
}

interface IThemeAction {
  type: "change-theme";
}

type ActionType = IThemeAction;

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

const themeInit = () => {
  const themeLocalStorage = window.localStorage.getItem("theme");
  if (themeLocalStorage) {
    return themeLocalStorage;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const initialState = {
  theme: themeInit(),
};
