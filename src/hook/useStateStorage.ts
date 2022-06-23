/* eslint-disable no-unused-vars */
import { useState } from "react";

const useStateStorage = <State>(
  key: string,
  storage: "localStorage" | "sessionStorage",
  initialState?: State
): [state: State, setStateStorage: (value: State) => void] => {
  const storageValue = window[storage].getItem(key);

  const [state, setState] = useState<State>(
    storageValue ? JSON.parse(storageValue) : initialState
  );

  const setStateStorage = (value: State) => {
    setState(value);
    window[storage].setItem(key, JSON.stringify(value));
  };

  return [state, setStateStorage];
};

export default useStateStorage;
