import styled from "styled-components";
import { Theme } from "../../../interfaces/ITheme";

export const InputCustomContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: inherit;
  height: inherit;
  border: 2px solid
    ${({ error }: { error?: true }) => (error ? "red" : "lightgray")};
  border-radius: 10px;
  background: transparent;
`;

export const Label = styled.label`
  --height: 18px;
  position: absolute;
  height: var(--height);
  top: calc(50% - var(--height) / 2);
  left: 5px;
  font-size: 13px;
  text-transform: capitalize;
  padding: 0 2px;
  border-radius: 20px;
  color: ${({ theme }: Theme) => theme.textColor};
  cursor: text;
  transition: top 100ms;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 8px;
  border: 0;
  border-radius: 10px;
  font-size: 14px;
  background-color: ${({ theme }: Theme) => theme.lightColor};
  color: ${({ theme }: Theme) => theme.textColor};

  :focus ~ ${Label}, :not(:placeholder-shown) ~ ${Label} {
    top: -21px;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }: Theme) => theme.textColor};
  }
`;

export const Error = styled.div`
  position: absolute;
  color: red;
  font-size: 14px;
  bottom: -20px;
  right: 0;
`;
