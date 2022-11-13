import S from "./style";
import useAuth from "../../../../hooks/useAuth";

const Navbar = ({ admin }) => {
  const { getUserInfo } = useAuth();

  const { picture, name, role } = getUserInfo();

  const getFistName = (name) => {
    return name.split(" ")[0];
  };

  return (
    <S.Container>
      {!admin && (
        <S.Nav>
          <S.NavList>
            <S.NavItem>
              <S.NavLink to="/">Inicio</S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink to="/">Comunidade</S.NavLink>
            </S.NavItem>

            {role === "ADMIN" && (
              <S.NavItem>
                <S.NavLink to="/admin/members">Administração</S.NavLink>
              </S.NavItem>
            )}
          </S.NavList>
        </S.Nav>
      )}

      <S.UserInfos>
        <S.UserPicture>
          <img src={picture} alt="foto de perfil do usuario" />
        </S.UserPicture>

        <S.UserName>{getFistName(name)}</S.UserName>
      </S.UserInfos>
    </S.Container>
  );
};

export default Navbar;
