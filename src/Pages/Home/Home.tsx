import { useMemo, useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import OfferTable from "../../components/OfferTable/OfferTable";
import Map from "../../components/Map/Map";
import { Container, MapContainer, Wrapper } from "./styles/HomeStyles";
import fot from "../../assets/fot2.jpeg";
import fot2 from "../../assets/fot.jpg";
import HomeReducerContext from "../../context/HomeReducerContext";
import { homeReducer, initialState } from "../../reducers/homeReducer";

export default function Home() {
  const [state, dispatch] = useReducer(homeReducer, initialState);
  const reducerValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  const [offersData, setOffersData] = useState([
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
  ]);

  return (
    <HomeReducerContext.Provider value={reducerValue}>
      <Wrapper data-testid="homeWrapper">
        <Container data-testid="homeContainer">
          <Routes>
            <Route index element={<OfferTable offersData={offersData} />} />
            <Route
              path="offers"
              element={<OfferTable offersData={offersData} />}
            />
          </Routes>
        </Container>
        <MapContainer data-testid="mapContainer">
          <Map
            mapPosition={[52.1145028, 19.423561111111113]}
            mapZoom={6}
            markerActiveId={reducerValue.state.offerIsMouseHover}
          />
        </MapContainer>
      </Wrapper>
    </HomeReducerContext.Provider>
  );
}
