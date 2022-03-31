import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.thead`
  display: flex;
  height: 40px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.lightColor};
`;
export const Container = styled.tr`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const OptionContainer = styled.th`
  display: flex;
  padding: 0 12px 0 30px;
`;
export const SortSelect = styled.th`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100%;
  padding: 6px 8px;
  margin-right: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.textColor};
`;
export const Option = styled(NavLink)`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: fit-content;
  height: 100%;
  margin-left: 5px;
  padding: 0 30px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  ::before {
    content: "";
    position: absolute;
    left: -20px;
    bottom: 0;
    width: 20px;
    height: 20px;
  }
  ::after {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 20px;
    height: 20px;
  }
  &.active,
  &.active:hover {
    background-color: ${({ theme }) => theme.darkColor};
    z-index: 1;
    ::before {
      background: radial-gradient(
        circle at left top,
        transparent 70%,
        ${({ theme }) => theme.darkColor} 69%
      );
      z-index: 1;
    }
    ::after {
      background: radial-gradient(
        circle at right top,
        transparent 70%,
        ${({ theme }) => theme.darkColor} 69%
      );
      z-index: 1;
    }
  }
  :hover {
    background-color: ${({ theme }) => theme.hoverColor};
    ::before {
      background: radial-gradient(
        circle at left top,
        transparent 70%,
        ${({ theme }) => theme.hoverColor} 69%
      );
    }
    ::after {
      background: radial-gradient(
        circle at right top,
        transparent 70%,
        ${({ theme }) => theme.hoverColor} 69%
      );
    }
  }
  @media (max-width: 1024px) {
    padding: 0 12px;
    font-size: 12px;
  }
`;
