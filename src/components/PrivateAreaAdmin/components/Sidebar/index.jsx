import S from "./style";
import MemberIcon from "../../../../assets/member.svg";
import CourseIcon from "../../../../assets/course.svg";
import ContentIcon from "../../../../assets/content.svg";
import CommentIcon from "../../../../assets/comment.svg";
import SettingIcon from "../../../../assets/setting.svg";
import ExitIcon from "../../../../assets/exit.svg";
import Xicon from "../../../../assets/x.svg";

const Sidebar = ({ isOpen, closedModal }) => {
  return (
    <>
      <S.CloseButton
        onClick={closedModal}
        className={isOpen ? "active" : "disabled"}
        name="close modal"
        title="closed modal menu"
        type="button"
      >
        <img src={Xicon} alt="close modal" />
      </S.CloseButton>

      <S.Container className={isOpen ? "active" : "disabled"}>
        <S.Navbar className={isOpen ? "active" : "disabled"}>
          <S.Generic>
            <S.MenuList>
              <S.Item>
                <S.MenuLink to="/admin/members">
                  <img
                    className="member"
                    src={MemberIcon}
                    alt="icone de membros"
                  />
                  Membros
                </S.MenuLink>
              </S.Item>

              <S.Item>
                <S.MenuLink to="/admin/trails">
                  <img src={CourseIcon} alt="icone de trilhas" />
                  Trilhas
                </S.MenuLink>
              </S.Item>

              <S.Item>
                <S.MenuLink to="/admin/contents">
                  <img src={ContentIcon} alt="icone de conteudo" />
                  Conteúdo
                </S.MenuLink>
              </S.Item>

              <S.Item>
                <S.MenuLink>
                  <img src={CommentIcon} alt=" icone de comentario" />
                  Comentários
                </S.MenuLink>
              </S.Item>
            </S.MenuList>

            <S.MenuConfig>
              <S.Item>
                <S.MenuLink>
                  <img src={SettingIcon} alt="icone de configuração" />{" "}
                  Configuração
                </S.MenuLink>
              </S.Item>

              <S.Item>
                <S.MenuLink to="/logout">
                  <img src={ExitIcon} alt="icone de sair" />
                  Sair
                </S.MenuLink>
              </S.Item>
            </S.MenuConfig>
          </S.Generic>
        </S.Navbar>
      </S.Container>
    </>
  );
};

export default Sidebar;
