/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { Theme } from "../../../../../interfaces/ITheme";

export const searchHeaderHeight = "83px";
export const searchHeaderHeightMaxWidth1024px = "56px";
export const Container = styled.section`
  box-sizing: border-box;
  display: flex;
  height: ${searchHeaderHeight};
  padding: 14px 15px 10px 15px;
  background-color: ${({ theme }: Theme) => theme.lightColor};
  @media (max-width: 1024px) {
    height: ${searchHeaderHeightMaxWidth1024px};
    padding: 0 10px 0 10px;
  }
`;
