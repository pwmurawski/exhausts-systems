/* eslint-disable import/prefer-default-export */
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Theme } from "../../../interfaces/ITheme";

export const Container = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  height: 500px;
  padding: 20px;
  background-color: ${({ theme }: Theme) => theme.lightColor};
  border-radius: 20px;
  box-shadow: 0 1px 4px 0 black;
`;

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  max-width: 350px;
  width: 100%;
  height: 40px;
  margin: 15px;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin: 0 0 30px 0;
  color: ${({ theme }: Theme) => theme.textColor};
`;

export const Login = styled.div`
  color: ${({ theme }: Theme) => theme.textColor};
`;

export const LinkLogin = styled(Link)`
  color: #ff679c;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
