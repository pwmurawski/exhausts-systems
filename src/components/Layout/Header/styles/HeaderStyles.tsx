import { Link } from "react-router-dom";
import styled from "styled-components";
import { Theme } from "../../../../interfaces/ITheme";

export const headerHeight = "68px";
export const headerHeightMaxWidth1024px = "40px";
export const Container = styled.section`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: ${headerHeight};
  padding: 0 24px 0 24px;
  border-bottom: 1px solid ${({ theme }: Theme) => theme.borderColor};
  background-color: ${({ theme }: Theme) => theme.lightColor};

  @media (max-width: 450px) {
    padding: 0 10px 0 10px;
  }
  @media (max-width: 1024px) {
    height: ${headerHeightMaxWidth1024px};
  }
`;
export const Logo = styled(Link)`
  margin: 0;
  color: ${({ theme }: Theme) =>
    theme.textColor === "gray" ? "black" : theme.textColor};
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
  font-weight: 900;
  text-decoration: none;
  @media (max-width: 460px) {
    font-size: 17px;
  }
`;
export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;
export const LoginButton = styled(Link)`
  width: fit-content;
  padding: 8px 16px;
  border: 0;
  border-radius: 20px;
  background-color: rgb(255, 64, 129);
  color: white;
  font-size: 17px;
  text-decoration: none;
  @media (max-width: 1024px) {
    font-size: 13px;
  }
  @media (max-width: 450px) {
    font-size: 10px;
  }
`;
