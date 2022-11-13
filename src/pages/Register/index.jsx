import Form from "./components/Form";
import Logo from "../../assets/logo_orange.svg";
import S from "./style";

const Register = () => {
  return (
    <>
      <S.Container>
        <S.Header>
          <S.Logo>
            <img src={Logo} alt="Logo orange" />
          </S.Logo>
        </S.Header>
        <S.Title>Crie sua conta</S.Title>
        <Form />
      </S.Container>
    </>
  );
};

export default Register;