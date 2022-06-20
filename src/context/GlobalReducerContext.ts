import { createContext } from "react";
import { ActionType, IState } from "../reducers/globalReducer";

interface IGlobalReducerContext {
  state: IState;
  dispatch: React.Dispatch<ActionType>;
}

const GlobalReducerContext = createContext<IGlobalReducerContext | null>(null);

export default GlobalReducerContext;
