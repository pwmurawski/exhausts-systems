/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

const hedaerHeight = "68px";
const hedaerHeight1024px = "40px";
export const Wrapper = styled.section`
  display: flex;
  width: 100vw;
  height: calc(100vh - ${hedaerHeight});
  @media (max-width: 1024px) {
    height: calc(100vh - ${hedaerHeight1024px});
  }
`;
