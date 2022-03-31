import styled from "styled-components";

const headerHeight = "151px";
const headerHeightMaxWidth1024px = "96px";
export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: calc(100vh - ${headerHeight});
  @media (max-width: 1024px) {
    height: calc(100vh - ${headerHeightMaxWidth1024px});
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
