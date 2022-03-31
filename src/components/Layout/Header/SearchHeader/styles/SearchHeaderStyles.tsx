/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.section`
  box-sizing: border-box;
  display: flex;
  height: 83px;
  padding: 14px 15px 10px 15px;
  background-color: ${({ theme }) => theme.lightColor};
  @media (max-width: 1024px) {
    height: 56px;
    padding: 0 10px 0 10px;
  }
`;
