import Logo from "../../assets/logo_orange.svg";
import S from "./style";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import { Link } from "react-router-dom";

const Header = ({ admin, onClick }) => {
  return (
    <S.Container>
      <S.FixedHeader>
        <S.Generic>
          <Button admin={admin} onClick={onClick} />
          <S.Logo title="Ir para a tela incial">
            <img src={Logo} alt="logo orange evolution" />
            <Link to="/" />
          </S.Logo>
        </S.Generic>
        <Navbar admin={admin} />
      </S.FixedHeader>
    </S.Container>
  );
};

export default Header;
