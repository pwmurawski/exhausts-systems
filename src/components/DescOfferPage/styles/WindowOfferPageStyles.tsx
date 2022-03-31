import styled from "styled-components";

export const Container = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  border-radius: 5px;
  color: ${({ theme }) =>
    theme.textColor === "gray" ? "black" : theme.textColor};
  background-color: ${({ theme }) => theme.lightColor};
  box-shadow: 0px 1px 3px ${({ theme }) => theme.shadowColor};
`;

export const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  height: 52px;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 2px solid ${({ theme }) => theme.darkColor};
`;

export const Body = styled.article`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 20px;
  height: fit-content;
  font-size: 16px;
`;
