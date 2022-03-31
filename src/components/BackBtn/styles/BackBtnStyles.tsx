/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

interface IContainerProps {
  left: string;
  top: string;
}

export const Container = styled.div`
  position: absolute;
  left: ${({ left }: IContainerProps) => left};
  top: ${({ top }: IContainerProps) => top};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: rgba(250, 250, 250, 0.6);
  border-radius: 20px;
  cursor: pointer;
  transition: border-radius 300ms, transform 300ms;
  :hover {
    border-radius: 5px;
    transform: rotate(360deg);
  }
`;
