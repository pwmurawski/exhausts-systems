import styled from "styled-components";
import {
  searchHeaderHeight,
  searchHeaderHeightMaxWidth1024px,
} from "../../../components/Layout/Header/SearchHeader/styles/SearchHeaderStyles";
import {
  headerHeight,
  headerHeightMaxWidth1024px,
} from "../../../components/Layout/Header/styles/HeaderStyles";

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: calc(100vh - (${headerHeight} + ${searchHeaderHeight}));
  @media (max-width: 1024px) {
    height: calc(
      100vh -
        (${headerHeightMaxWidth1024px} + ${searchHeaderHeightMaxWidth1024px})
    );
  }
`;
export const Container = styled.section`
  flex: 1;
`;
export const MapContainer = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  transition: flex 200ms;
  @media (max-width: 1389px) {
    flex: 0.7;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
