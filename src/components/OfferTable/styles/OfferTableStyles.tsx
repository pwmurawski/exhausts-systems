/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.darkColor};
`;
