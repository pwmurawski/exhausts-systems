/* eslint-disable no-unused-vars */
import { Checkbox, Slider, ToggleBtnContainer } from "./styles/ToggleBtnStyles";

interface IToggleBtnProps {
  isChecked: (checked: boolean) => void;
  valueChecked: boolean;
  bgColor?: string;
  bgColorChecked?: string;
  sliderColor?: string;
  sliderColorChecked?: string;
}

const defaultProps = {
  bgColor: undefined,
  bgColorChecked: undefined,
  sliderColor: undefined,
  sliderColorChecked: undefined,
};

export default function ToggleBtn({
  isChecked,
  valueChecked,
  bgColor,
  bgColorChecked,
  sliderColor,
  sliderColorChecked,
}: IToggleBtnProps) {
  return (
    <ToggleBtnContainer data-testid="toggleBtnContainer">
      <Checkbox
        data-testid="checkbox"
        type="checkbox"
        checked={valueChecked}
        onChange={(e) => isChecked(e.target.checked)}
      />
      <Slider
        data-testid="slider"
        bgColor={bgColor}
        sliderColor={sliderColor}
        bgColorChecked={bgColorChecked}
        sliderColorChecked={sliderColorChecked}
      />
    </ToggleBtnContainer>
  );
}

ToggleBtn.defaultProps = defaultProps;
