/* eslint-disable import/prefer-default-export */
import styled, { createGlobalStyle } from "styled-components";

export const LeafletContainer = createGlobalStyle`
  .leaflet-container {
    height: 100%;
    width: 100%;
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
