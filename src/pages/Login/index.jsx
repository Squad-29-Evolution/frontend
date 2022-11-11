import S from "./style";
import Logo from "../../assets/logo_orange.svg";
import Form from "./components/Form";

const Login = () => {
  return (
    <S.Container>
      <S.BackgroundLinear>
        <S.Logo>
          <img src={Logo} alt="logo orange" />
        </S.Logo>
      </S.BackgroundLinear>
      <S.Header />
      <Form />
    </S.Container>
  );
};

export default Login;
