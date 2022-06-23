import { useContext, useMemo, useReducer } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import OfferTable from "../../components/OfferTable/OfferTable";
import Map from "../../components/Map/Map";
import { Container, MapContainer, Wrapper } from "./styles/HomeStyles";
import HomeReducerContext from "../../context/HomeReducerContext";
import { homeReducer, initialState } from "../../reducers/homeReducer";
import { ILocationState } from "../../interfaces/ILocationState";
import GlobalReducerContext from "../../context/GlobalReducerContext";
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";

export default function Home() {
  const [state, dispatch] = useReducer(homeReducer, initialState);
  const reducerValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  const loc = useLocation() as ILocationState;
  const background = loc.state?.background;
  const globalReducer = useContext(GlobalReducerContext);

  if (!globalReducer?.state.offers.length) return <LoadingIcon />;
  return (
    <HomeReducerContext.Provider value={reducerValue}>
      <Wrapper data-testid="homeWrapper">
        <Container data-testid="homeContainer">
          <Routes location={background}>
            <Route
              index
              element={
                <OfferTable offersData={globalReducer?.state.offers ?? []} />
              }
            />
            <Route
              path="offers"
              element={
                <OfferTable offersData={globalReducer?.state.offers ?? []} />
              }
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
