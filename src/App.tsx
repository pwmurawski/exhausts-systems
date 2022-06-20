import { useMemo, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { lightTheme, darkTheme } from "./GlobalStyles";
import Layout from "./components/Layout/Layout";
import Header from "./components/Layout/Header/Header";
import Home from "./Pages/Home/Home";
import SearchHeader from "./components/Layout/Header/SearchHeader/SearchHeader";
import { globalReducer, initialState } from "./reducers/globalReducer";
import GlobalReducerContext from "./context/GlobalReducerContext";
import Offer from "./Pages/OfferPage/OfferPage";

export default function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);
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
    <GlobalReducerContext.Provider value={reducerValue}>
      <ThemeProvider
        theme={reducerValue.state.theme === "light" ? lightTheme : darkTheme}
      >
        <Layout header={header} content={content} />
      </ThemeProvider>
    </GlobalReducerContext.Provider>
  );
}
