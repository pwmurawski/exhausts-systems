/* eslint-disable no-unused-vars */
import { Checkbox, Slider, ThemeSwitch } from "./styles/ToggleBtnStyles";

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
    <ThemeSwitch data-testid="themeSwitch">
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
    </ThemeSwitch>
  );
}

ToggleBtn.defaultProps = defaultProps;
