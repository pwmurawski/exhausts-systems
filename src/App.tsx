import { useMemo, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { lightTheme, darkTheme } from "./GlobalStyles";
import Layout from "./components/Layout/Layout";
import Header from "./components/Layout/Header/Header";
import Home from "./Pages/Home/Home";
import SearchHeader from "./components/Layout/Header/SearchHeader/SearchHeader";
import { reducer, initialState } from "./reducer";
import ReducerContext from "./context/ReducerContext";
import Offer from "./Pages/OfferPage/OfferPage";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reducerValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const header = (
    <Header>
      <Routes>
        <Route path="*" element={<SearchHeader />} />
        <Route path="/offer/:id" element={null} />
      </Routes>
    </Header>
  );
  const content = (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/offer/:id" element={<Offer />} />
    </Routes>
  );

  return (
    <ReducerContext.Provider value={reducerValue}>
      <ThemeProvider theme={state.theme === "light" ? lightTheme : darkTheme}>
        <Layout header={header} content={content} />
      </ThemeProvider>
    </ReducerContext.Provider>
  );
}
