import { ReactElement, useContext } from "react";
import { useLocation } from "react-router-dom";
import GlobalReducerContext from "../../../context/GlobalReducerContext";
import ToggleBtn from "../../ToggleBtn/ToggleBtn";
import { Container, LoginButton, Logo, Right } from "./styles/HeaderStyles";

const defaultProps = {
  children: undefined,
};

export default function Header({ children }: { children?: ReactElement }) {
  const globalReducer = useContext(GlobalReducerContext);
  const { pathname } = useLocation();

  const themeHandler = () => {
    globalReducer?.dispatch({ type: "change-theme" });
  };

  return (
    <>
      <Container data-testid="headerContainer">
        <Logo to="/" data-testid="logo">
          Exhausts Systems
        </Logo>
        <ToggleBtn
          valueChecked={globalReducer?.state.theme !== "light"}
          isChecked={themeHandler}
        />
        <Right data-testid="right">
          <LoginButton
            to="login"
            state={{ background: pathname }}
            data-testid="loginButton"
          >
            Zaloguj się
          </LoginButton>
        </Right>
      </Container>
      {children}
    </>
  );
}

Header.defaultProps = defaultProps;
