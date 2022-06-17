/* eslint-disable import/prefer-default-export */
import styled, { createGlobalStyle } from "styled-components";

export const LeafletStyles = createGlobalStyle`
  .leaflet-container {
    height: 100%;
    width: 100%;
  }

  @keyframes jump {
    0% {
      top: 0px;
    }
    50% {
      top: -20px;
    }
    100% {
      top: 0px;
    }
  }
  
  .leaflet-active {
    animation: jump 1.2s infinite;
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
