import { createContext } from "react";
import { ActionType, IState } from "../interfaces/IGlobalReducer";

interface IGlobalReducerContext {
  state: IState;
  dispatch: React.Dispatch<ActionType>;
}

const GlobalReducerContext = createContext<IGlobalReducerContext | null>(null);

export default GlobalReducerContext;
