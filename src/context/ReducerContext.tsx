import { createContext } from "react";

interface IThemeAction {
  type: "change-theme";
}

type Action = IThemeAction;

interface IReducerContext {
  state: {
    theme: string;
  };
  dispatch: React.Dispatch<Action>;
}

const ReducerContext = createContext<IReducerContext | null>(null);

export default ReducerContext;
