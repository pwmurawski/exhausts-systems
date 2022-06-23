import { useEffect, useMemo, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import { lightTheme, darkTheme } from "./GlobalStyles";
import Layout from "./components/Layout/Layout";
import Header from "./components/Layout/Header/Header";
import Home from "./Pages/Home/Home";
import SearchHeader from "./components/Layout/Header/SearchHeader/SearchHeader";
import { globalReducer, initialState } from "./reducers/globalReducer";
import GlobalReducerContext from "./context/GlobalReducerContext";
import OfferPage from "./Pages/OfferPage/OfferPage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { ILocationState } from "./interfaces/ILocationState";
import fot from "./assets/fot2.jpeg";
import fot2 from "./assets/fot.jpg";
import { IOffersData } from "./components/OfferTable/OfferTable";

const initoffersData: IOffersData[] = [
  {
    id: "1",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie.",
    img: fot,
    price: "25000",
    date: "New",
    office: "KataNima",
    location: "Warszawa",
  },
  {
    id: "2",
    title: "Lorem 2",
    img: fot2,
    price: "500-5000",
    date: "1d ago",
    office: "WkurweHuku",
    location: "Białystok",
  },
  {
    id: "3",
    title: "Lorem 3",
    img: fot,
    price: "1000",
    date: "10d ago",
    office: "SamaRura",
    location: "Gdańsk",
  },
  {
    id: "4",
    title: "Lorem 3",
    img: fot,
    price: "1000",
    date: "10d ago",
    office: "SamaRura",
    location: "Gdańsk",
  },
  {
    id: "5",
    title: "Lorem 3",
    img: fot,
    price: "1000",
    date: "10d ago",
    office: "SamaRura",
    location: "Gdańsk",
  },
  {
    id: "6",
    title: "Lorem 3",
    img: fot,
    price: "1000",
    date: "10d ago",
    office: "SamaRura",
    location: "Gdańsk",
  },
  {
    id: "7",
    title: "Lorem 3",
    img: fot,
    price: "1000",
    date: "10d ago",
    office: "SamaRura",
    location: "Gdańsk",
  },
];

export default function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const reducerValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  const loc = useLocation() as ILocationState;
  const background = loc.state?.background;

  useEffect(() => {
    setTimeout(() => {
      reducerValue.dispatch({ type: "setOffers", offers: initoffersData });
    }, 2000);
  }, []);

  const auth = (
    <Routes>
      <Route path="*" element={null} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
  const header = (
    <Header>
      <Routes location={background}>
        <Route path="*" element={<SearchHeader />} />
        <Route path="/offer/:id" element={null} />
      </Routes>
    </Header>
  );
  const content = (
    <Routes location={background}>
      <Route path="/*" element={<Home />} />
      <Route path="/offer/:id" element={<OfferPage />} />
    </Routes>
  );

  return (
    <GlobalReducerContext.Provider value={reducerValue}>
      <ThemeProvider
        theme={reducerValue.state.theme === "light" ? lightTheme : darkTheme}
      >
        <Layout header={header} content={content} auth={auth} />
      </ThemeProvider>
    </GlobalReducerContext.Provider>
  );
}
