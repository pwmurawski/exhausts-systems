/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const ModalWindowWrapper = styled.section`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 64px;
  background-color: rgba(0, 0, 0, 0.2);
  transition: padding 1000ms;
  z-index: 1001;

  @media (max-width: 760px) {
    padding: 24px 10px;
  }
`;
