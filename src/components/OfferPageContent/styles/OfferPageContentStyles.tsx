/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { Theme } from "../../../interfaces/ITheme";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 10px;
  background-color: ${({ theme }: Theme) => theme.darkColor};
  overflow-y: scroll;

  @media (min-width: 450px) {
    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: gray;
      border-radius: 20px;
    }
  }
`;
