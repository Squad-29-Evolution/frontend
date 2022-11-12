import S from "./style";
import Logo from "../../assets/logo_orange.svg";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const RecoveryPass = () => {
  useDocumentTitle("RecoveryPass");
  return (
    <>
      <S.Container>
        <S.BackgroundLinear />
        <S.Header>
          <S.Logo>
            <img src={Logo} alt="logo orange" />
          </S.Logo>
        </S.Header>
        <S.ContentBox>
          <S.Text>
            Os Programadores ainda não fizeram essa função, volte novamente mais
            tarde
          </S.Text>
          <S.BackButton to="/login">Voltar</S.BackButton>
        </S.ContentBox>
      </S.Container>
    </>
  );
};

export default RecoveryPass;
