import styled from "styled-components";

export const ThemeSwitch = styled.div`
  position: relative;
  width: 50px;
  height: 26px;
  min-width: 50px;
  min-height: 26px;
  margin: 0 30px 0 30px;
  @media (max-width: 1024px) {
    margin: 0 5px 0 5px;
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
`;

interface ISliderProps {
  bgColor?: string;
  sliderColor?: string;
  bgColorChecked?: string;
  sliderColorChecked?: string;
}

export const Slider = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }: ISliderProps) =>
    bgColor ?? "rgb(223, 226, 228)"};
  transition: 0.4s;
  border-radius: 34px;

  ::before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 2px;
    bottom: 2px;
    background-color: ${({ sliderColor }: ISliderProps) =>
      sliderColor ?? "white"};
    transition: 0.4s;
    border-radius: 50%;
  }
  ${Checkbox}:checked + & {
    background-color: ${({ bgColorChecked }: ISliderProps) =>
      bgColorChecked ?? "rgb(33, 33, 33)"};
  }
  ${Checkbox}:checked + &::before {
    transform: translateX(24px);
    background-color: ${({ sliderColorChecked }: ISliderProps) =>
      sliderColorChecked ?? "white"};
  }
`;
