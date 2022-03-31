import styled from "styled-components";

export const Container = styled.section`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 68px;
  padding: 0 24px 0 24px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.lightColor};

  @media (max-width: 450px) {
    padding: 0 10px 0 10px;
  }
  @media (max-width: 1024px) {
    height: 40px;
  }
`;
export const Logo = styled.h1`
  margin: 0;
  color: ${({ theme }) =>
    theme.textColor === "gray" ? "black" : theme.textColor};
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
  font-weight: 900;
  @media (max-width: 460px) {
    font-size: 17px;
  }
`;
export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;
export const LoginButton = styled.button`
  width: fit-content;
  height: 40px;
  padding: 8px 16px;
  border: 0;
  border-radius: 20px;
  background-color: rgb(255, 64, 129);
  color: white;
  font-size: 17px;
  @media (max-width: 450px) {
    font-size: 12px;
    padding: 2px 16px;
  }
  @media (max-width: 1024px) {
    height: 32.5px;
  }
`;
