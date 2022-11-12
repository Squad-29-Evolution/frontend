import Logo from "../../assets/logo_orange.svg";
import S from "./style";
import Navbar from "./components/Navbar";

const Header = () => {
  return (
    <S.Container>
      <S.FixedHeader>
        <S.Logo>
          <img src={Logo} alt="logo orange evolution" />
        </S.Logo>
        <Navbar />
      </S.FixedHeader>
    </S.Container>
  );
};

export default Header;
