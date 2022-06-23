import { Rules } from "./IRules";

export interface IRegisterForm {
  email: {
    value: string;
    error?: string;
    rules: Rules;
  };
  password: {
    value: string;
    error?: string;
    rules: Rules;
  };
}
