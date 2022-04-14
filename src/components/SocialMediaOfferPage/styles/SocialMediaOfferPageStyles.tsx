import styled from "styled-components";

export const Container = styled.section`
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: -35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 5px;
  height: fit-content;
`;

export const Info = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 180px;
  width: 100%;
  height: 75px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.lightColor};
  box-shadow: 0px 1px 3px ${({ theme }) => theme.shadowColor};
  cursor: pointer;
`;

export const Icon = styled.div`
  position: absolute;
  top: -15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.lightColor};
  box-shadow: 0px 1px 3px ${({ theme }) => theme.shadowColor};
  border-radius: 150px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 28px;
  height: 28px;
`;

export const Name = styled.div`
  font-size: 14px;
  color: ${({ theme }) =>
    theme.textColor === "gray" ? "black" : theme.textColor};
`;

export const InfoText = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.textColor};
`;
