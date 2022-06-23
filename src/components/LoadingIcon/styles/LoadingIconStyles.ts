/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { Theme } from "../../../interfaces/ITheme";
import {
  searchHeaderHeight,
  searchHeaderHeightMaxWidth1024px,
} from "../../Layout/Header/SearchHeader/styles/SearchHeaderStyles";
import {
  headerHeight,
  headerHeightMaxWidth1024px,
} from "../../Layout/Header/styles/HeaderStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - (${headerHeight} + ${searchHeaderHeight}));
  background-color: ${({ theme }: Theme) => theme.darkColor};
  color: ${({ theme }: Theme) => theme.textColor};
  font-size: 30px;

  @media (max-width: 1024px) {
    height: calc(
      100vh -
        (${headerHeightMaxWidth1024px} + ${searchHeaderHeightMaxWidth1024px})
    );
  }
`;
