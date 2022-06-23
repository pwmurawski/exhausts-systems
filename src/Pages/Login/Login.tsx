import { useLocation } from "react-router-dom";
import Modals from "../../components/Modals/Modals";
import portal from "../../hoc/portal";
import InputCustom from "../../components/InputCustom/InputCustom";
import { ILoginForm } from "../../interfaces/ILoginForm";
import {
  Container,
  Form,
  InputContainer,
  Title,
  Register,
  LinkRegister,
} from "./styles/LoginStyles";
import { ILocationState } from "../../interfaces/ILocationState";
import useFormValid from "../../hook/useFormValid";

const initForm: ILoginForm = {
  email: {
    value: "",
    rules: ["email", "required"],
  },
  password: {
    value: "",
    rules: [{ rule: "min", length: 4 }, "required"],
  },
};

function Login() {
  const [formData, changeHandler] = useFormValid(initForm);
  const loc = useLocation() as ILocationState;
  const background = loc.state?.background;

  return (
    <Modals>
      <Container onClick={(e) => e.stopPropagation()}>
        <Title>Zaloguj się</Title>
        <Form>
          <InputContainer>
            <InputCustom
              placeholder="Email"
              value={formData.email.value}
              onChange={(e) => changeHandler(e.target.value, "email")}
              error={formData.email.error}
            />
          </InputContainer>
          <InputContainer>
            <InputCustom
              placeholder="Hasło"
              value={formData.password.value}
              onChange={(e) => changeHandler(e.target.value, "password")}
              error={formData.password.error}
            />
          </InputContainer>
        </Form>
        <Register>
          New account?{" "}
          <LinkRegister to="/register" state={{ background }}>
            Register
          </LinkRegister>
        </Register>
      </Container>
    </Modals>
  );
}

export default portal(Login, "modal");
