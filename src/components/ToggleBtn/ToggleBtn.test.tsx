import { fireEvent, render } from "@testing-library/react";
import ToggleBtn from "./ToggleBtn";

let valueChecked = false;

const checked = (e: boolean) => {
  const val = e;
  return val;
};

const renderToggleBtn = () => {
  const utils = render(
    <ToggleBtn
      isChecked={(e) => {
        valueChecked = checked(e);
      }}
      valueChecked={false}
    />
  );

  return { ...utils };
};

describe("ToggleBtn component", () => {
  it("render ToggleBtnContainer", () => {
    const { getByTestId } = renderToggleBtn();
    const themeSwitch = getByTestId("toggleBtnContainer");

    expect(themeSwitch).toBeInTheDocument();
  });

  it("render Checkbox", () => {
    const { getByTestId } = renderToggleBtn();
    const inputCheckbox = getByTestId("checkbox");

    expect(inputCheckbox).toBeInTheDocument();
  });

  it("render Slider", () => {
    const { getByTestId } = renderToggleBtn();
    const slider = getByTestId("slider");

    expect(slider).toBeInTheDocument();
  });

  it("ToggleBtnContainer to have style", () => {
    const { getByTestId } = renderToggleBtn();
    const themeSwitch = getByTestId("toggleBtnContainer");

    expect(themeSwitch).toHaveStyle({
      position: "relative",
      width: "50px",
      height: "26px",
      margin: "0 30px 0 30px",
    });
  });

  it("Checkbox to have style", () => {
    const { getByTestId } = renderToggleBtn();
    const inputCheckbox = getByTestId("checkbox");

    expect(inputCheckbox).toHaveStyle({
      position: "absolute",
      left: "0",
      width: "100%",
      height: "100%",
      margin: "0",
      opacity: "0",
      zIndex: "1",
      cursor: "pointer",
    });
  });

  it("Slider to have style", () => {
    const { getByTestId } = renderToggleBtn();
    const slider = getByTestId("slider");

    expect(slider).toHaveStyle({
      width: "100%",
      height: "100%",
      transition: "0.4s",
      borderRadius: "34px",
      backgroundColor: "rgb(223, 226, 228)",
    });
  });

  it("change event Checkbox", () => {
    const { getByTestId } = renderToggleBtn();
    const inputCheckbox = getByTestId("checkbox");

    fireEvent.change(inputCheckbox, { target: { checked: true } });
    expect(inputCheckbox).toBeChecked();
  });

  it("props isChecked", () => {
    const { getByTestId, rerender } = renderToggleBtn();
    const inputCheckbox = getByTestId("checkbox");

    fireEvent.click(inputCheckbox);
    expect(valueChecked).toBe(true);

    rerender(
      <ToggleBtn
        isChecked={(e) => {
          valueChecked = checked(e);
        }}
        valueChecked
      />
    );

    fireEvent.click(inputCheckbox);
    expect(valueChecked).toBe(false);
  });

  it("props valueChecked", () => {
    const { rerender, getByTestId } = renderToggleBtn();
    const inputCheckbox = getByTestId("checkbox");

    expect(inputCheckbox).not.toBeChecked();

    rerender(<ToggleBtn isChecked={checked} valueChecked />);

    expect(inputCheckbox).toBeChecked();
  });

  it("props bgColor", () => {
    const { rerender, getByTestId } = renderToggleBtn();
    const slider = getByTestId("slider");

    expect(slider).not.toHaveStyle("backgroundColor: red");

    rerender(
      <ToggleBtn isChecked={checked} valueChecked={false} bgColor="red" />
    );

    expect(slider).toHaveStyle("backgroundColor: red");
  });

  it("props bgColorChecked", () => {
    const { rerender, getByTestId } = renderToggleBtn();
    const slider = getByTestId("slider");

    expect(slider).not.toHaveStyle("backgroundColor: red");

    rerender(
      <ToggleBtn isChecked={checked} valueChecked bgColorChecked="red" />
    );

    expect(slider).toHaveStyle("backgroundColor: red");
  });

  // Pseudo Elements

  // it("props sliderColor", () => {
  //   const { rerender, getByTestId } = renderToggleBtn();
  //   const slider = getByTestId("slider");
  //   const style = window.getComputedStyle(slider, "::before");

  //   rerender(
  //     <ToggleBtn isChecked={checked} valueChecked={false} sliderColor="red" />
  //   );

  //   expect(style.getPropertyValue("background-color")).toBe("red");
  // });

  // it("props sliderColorChecked", () => {
  //   const { rerender, getByTestId } = renderToggleBtn();
  //   const slider = getByTestId("slider");
  //   const style = window.getComputedStyle(slider, "::before");

  //   rerender(
  //     <ToggleBtn isChecked={checked} valueChecked sliderColorChecked="red" />
  //   );

  //   expect(style.getPropertyValue("background-color")).toBe("red");
  // });
});
