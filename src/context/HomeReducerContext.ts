import { createContext } from "react";
import { ActionType, IState } from "../reducers/homeReducer";

interface IHomeReducerContext {
  state: IState;
  dispatch: React.Dispatch<ActionType>;
}

const HomeReducerContext = createContext<IHomeReducerContext | null>(null);

export default HomeReducerContext;
