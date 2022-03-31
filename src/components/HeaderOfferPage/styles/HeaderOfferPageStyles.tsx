import styled from "styled-components";
import exhaust from "../../../assets/exhaust.png";

export const Container = styled.section`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: fit-content;
  padding: 40px 20px 70px;
  margin-bottom: 80px;
  background: ${({ bgColor }: { bgColor: string }) => bgColor ?? "#2b75c9"}
    url(${exhaust}) repeat 50% 50%;
  background-size: 5%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 1px 3px ${({ theme }) => theme.shadowColor};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  max-width: 130px;
  max-height: 130px;
  min-width: 130px;
  min-height: 130px;
  border-radius: 150px;
  background-color: rgba(250, 250, 250, 0.6);
  border: 8px solid rgb(250, 250, 250);
  overflow: hidden;
  box-shadow: 0px 1px 3px black;
`;
export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Text = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;
  color: white;
  text-shadow: 1px 1px black;
`;

export const Title = styled.h2`
  font-size: 23px;
  margin: 0 0 8px 0;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 8px 0;
`;

export const LocationIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const LocationText = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-left: 10px;
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: rgb(0, 245, 0);
`;
