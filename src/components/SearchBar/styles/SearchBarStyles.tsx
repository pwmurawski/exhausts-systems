import styled from "styled-components";

export const Search = styled.section`
  box-sizing: border-box;
  display: flex;
  width: 350px;
  height: 36px;
  padding: 3px 10px;
  margin-top: 6px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.darkColor};
  cursor: text;
  transition: background-color 300ms;
  :hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }
  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`;
export const Icon = styled.div`
  box-sizing: border-box;
  min-width: 30px;
  min-height: 30px;
  width: 30px;
  height: 30px;
  padding: 3px;
`;
export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: 0;
  padding: 6px 0 7px 5px;
  background: transparent;
  outline: none;
  font-size: 15px;
  font-family: inherit;
  color: ${({ theme }) => theme.textColor};
`;
