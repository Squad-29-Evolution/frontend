import Logo from "../../assets/logo_orange.svg";
import S from "./style";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

const Header = ({ admin, onClick }) => {
  return (
    <S.Container>
      <S.FixedHeader>
        <S.Generic>
          <Button onClick={onClick} />
          <S.Logo>
            <img src={Logo} alt="logo orange evolution" />
          </S.Logo>
        </S.Generic>
        <Navbar admin={admin} />
      </S.FixedHeader>
    </S.Container>
  );
};

export default Header;
