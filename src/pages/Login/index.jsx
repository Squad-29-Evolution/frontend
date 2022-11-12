import S from "./style";
import Logo from "../../assets/logo_orange.svg";
import Form from "./components/Form";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Login = () => {
  useDocumentTitle("Login");
  return (
    <>
      <S.PersonsBG />
      <S.StudentBG />
      <S.PersonWithNotBG />
      <S.DateBG />
      <S.Container>
        <S.BackgroundLinear />
        <S.Header>
          <S.Logo>
            <img src={Logo} alt="logo orange" />
          </S.Logo>
        </S.Header>
        <Form />
      </S.Container>
    </>
  );
};

export default Login;
