import { useNavigate } from "react-router-dom";
import BackBtnIcon from "../Svg/BackBtnIcon";
import { Container } from "./styles/BackBtnStyles";

interface IBackBtnProps {
  left: string;
  top: string;
}

export default function BackBtn({ left, top }: IBackBtnProps) {
  const navigate = useNavigate();

  return (
    <Container
      left={left}
      top={top}
      onClick={() => {
        navigate(-1);
      }}
    >
      <BackBtnIcon />
    </Container>
  );
}
