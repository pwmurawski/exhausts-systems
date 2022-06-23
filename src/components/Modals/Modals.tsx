import { ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ILocationState } from "../../interfaces/ILocationState";
import { ModalWindowWrapper } from "./styles/ModalsStyles";

export default function Modals({ children }: { children: ReactElement }) {
  const nav = useNavigate();
  const loc = useLocation() as ILocationState;
  const background = loc.state?.background;

  return (
    <ModalWindowWrapper
      onClick={() => {
        nav(background ?? "/");
      }}
    >
      {children}
    </ModalWindowWrapper>
  );
}
