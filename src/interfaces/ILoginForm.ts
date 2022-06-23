import { Rules } from "./IRules";

export interface ILoginForm {
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
