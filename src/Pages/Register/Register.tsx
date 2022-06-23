import { useLocation } from "react-router-dom";
import InputCustom from "../../components/InputCustom/InputCustom";
import Modals from "../../components/Modals/Modals";
import portal from "../../hoc/portal";
import useFormValid from "../../hook/useFormValid";
import { ILocationState } from "../../interfaces/ILocationState";
import { IRegisterForm } from "../../interfaces/IRegisterForm";
import {
  Container,
  Form,
  InputContainer,
  LinkLogin,
  Login,
  Title,
} from "./styles/RegisterStyles";

const initForm: IRegisterForm = {
  email: {
    value: "",
    rules: ["email", "required"],
  },
  password: {
    value: "",
    rules: [{ rule: "min", length: 4 }, "required"],
  },
};

function Register() {
  const [formData, changeHandler] = useFormValid(initForm);
  const loc = useLocation() as ILocationState;
  const background = loc.state?.background;

  return (
    <Modals>
      <Container onClick={(e) => e.stopPropagation()}>
        <Title>Zarejestruj się</Title>
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
        <Login>
          New account?{" "}
          <LinkLogin to="/Login" state={{ background }}>
            Login
          </LinkLogin>
        </Login>
      </Container>
    </Modals>
  );
}

export default portal(Register, "modal");
