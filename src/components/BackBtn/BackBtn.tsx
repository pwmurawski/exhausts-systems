import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useStateStorage from "../../hook/useStateStorage";
import { ILocationState } from "../../interfaces/ILocationState";
import BackBtnIcon from "../Svg/BackBtnIcon";
import { Container } from "./styles/BackBtnStyles";

interface IBackBtnProps {
  left: string;
  top: string;
}

export default function BackBtn({ left, top }: IBackBtnProps) {
  const navigate = useNavigate();
  const loc = useLocation() as ILocationState;
  const btnBackOfferUrl = loc.state?.btnBackOfferUrl;
  const [backBtnUrl, setBackBtnUrl] = useStateStorage(
    "backBtnUrl",
    "sessionStorage",
    "/"
  );

  useEffect(() => {
    if (btnBackOfferUrl) setBackBtnUrl(btnBackOfferUrl);
  }, []);

  return (
    <Container
      data-testid="conBackBtn"
      left={left}
      top={top}
      onClick={() => {
        navigate(backBtnUrl);
      }}
    >
      <BackBtnIcon />
    </Container>
  );
}
