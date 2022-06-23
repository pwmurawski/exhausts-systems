import styled from "styled-components";
import { Theme } from "../../../../../interfaces/ITheme";

export const Container = styled.tr`
  display: flex;
  height: fit-content;
  margin: 0 10px 12px;
  border-radius: 10px;
  background-color: ${({ theme }: Theme) => theme.lightColor};
  box-shadow: 0px 1px 3px ${({ theme }: Theme) => theme.shadowColor};
  cursor: pointer;
  :hover {
    box-shadow: 0px 1px 2px gray;
  }
`;
export const Center = styled.td`
  display: flex;
  align-items: center;
  padding: 0;
`;
export const ImgContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 160px;
  min-width: 160px;
  max-height: 160px;
  min-height: 160px;
  margin: 5px;
  padding: 0;
  overflow: hidden;
  background-color: ${({ theme }: Theme) => theme.darkColor};
  border-radius: 10px;
  @media (max-width: 365px) {
    min-width: 130px;
  }
`;
export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;
export const ContentContainer = styled.td`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  @media (max-width: 405px) {
    padding: 10px;
  }
`;
export const InfoTopLine = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;
export const Title = styled.h2`
  color: ${({ theme }: Theme) =>
    theme.textColor === "gray" ? "black" : theme.textColor};
  word-wrap: break-word;
  margin: 0 5px 0 0;
  font-size: 16px;
  @media (max-width: 500px) {
    font-size: 3vw;
  }
`;
export const Left = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PriceRanges = styled.div`
  text-align: end;
  color: rgb(0, 200, 0);
  font-size: 14px;
  white-space: nowrap;
  @media (max-width: 550px) {
    max-width: 50px;
    white-space: pre-line;
  }
  @media (max-width: 500px) {
    font-size: 3vw;
  }
`;
export const TimeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  margin-top: 5px;
`;
export const Time = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 5px 10px;
  border-radius: 20px;
  color: ${({ theme }: Theme) => theme.textColor};
  background-color: ${({ theme }: Theme) => theme.darkColor};
  font-size: 12px;
  @media (max-width: 473px) {
    font-size: 10px;
  }
`;
export const InfoBottomLine = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const InfoPin = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 5px 10px;
  margin: 2px 10px 0 0;
  font-size: 12px;
  color: ${({ theme }: Theme) => theme.textColor};
  background-color: ${({ theme }: Theme) => theme.darkColor};
  border-radius: 20px;
  @media (max-width: 473px) {
    font-size: 10px;
  }
`;
export const Name = styled.div`
  margin-left: 5px;
`;
export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
export const Btn = styled.button`
  margin: 0 3px 0 0;
  padding: 0;
  border: 0;
  background: transparent;
`;
