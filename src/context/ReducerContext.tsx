import { createContext } from "react";
import { ActionType, IState } from "../reducer";

interface IReducerContext {
  state: IState;
  dispatch: React.Dispatch<ActionType>;
}

const ReducerContext = createContext<IReducerContext | null>(null);

export default ReducerContext;
