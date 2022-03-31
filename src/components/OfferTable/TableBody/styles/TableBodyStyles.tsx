/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Body = styled.tbody`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 2px;
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
