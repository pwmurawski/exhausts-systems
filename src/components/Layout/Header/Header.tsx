import { ReactElement, useContext } from "react";
import ReducerContext from "../../../context/ReducerContext";
import ToggleBtn from "../../ToggleBtn/ToggleBtn";
import { Container, LoginButton, Logo, Right } from "./styles/HeaderStyles";

const defaultProps = {
  children: undefined,
};

export default function Header({ children }: { children?: ReactElement }) {
  const reducerCon = useContext(ReducerContext);

  const themeHandler = () => {
    reducerCon?.dispatch({ type: "change-theme" });
  };

  return (
    <>
      <Container data-testid="headerContainer">
        <Logo data-testid="logo">Exhausts Systems</Logo>
        <ToggleBtn
          valueChecked={reducerCon?.state.theme !== "light"}
          isChecked={themeHandler}
        />
        <Right data-testid="right">
          <LoginButton data-testid="loginButton">Zaloguj się</LoginButton>
        </Right>
      </Container>
      {children}
    </>
  );
}

Header.defaultProps = defaultProps;
