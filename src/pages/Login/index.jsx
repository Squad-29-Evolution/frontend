import { useEffect } from "react";
import S from "./style";
import Logo from "../../assets/logo_orange.svg";
import Form from "./components/Form";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { getToken } from "../../utils/authToken";
import { useNavigate } from "react-router-dom";

const Login = () => {
  useDocumentTitle("Login");
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate("/");
    }
  }, []);

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
