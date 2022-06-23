import styled from "styled-components";
import { Theme } from "../../../interfaces/ITheme";

export const Container = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  height: 36px;
  padding: 0 16px;
  margin-top: 6px;
  margin-left: 20px;
  background-color: ${({ theme }: Theme) => theme.lightColor};
  border: 1px solid ${({ theme }: Theme) => theme.borderColor};
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 300ms;
  :hover {
    background-color: ${({ theme }: Theme) => theme.hoverColor};
  }
  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`;
export const Text = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }: Theme) => theme.textColor};
`;
export const Icon = styled.div`
  width: 18px;
  height: 18px;
  transition: transform 300ms;
  transform: ${({ isRotate }: { isRotate: boolean }) =>
    isRotate ? "rotate(180deg)" : "none"};
`;
