import LevelBadge from "./components/LevelBadge";
import Arrow from "../../assets/arrow.svg";
import S from "./style";
import CourseBadge from "./components/CourseBadge";
import BadgeLink from "../../components/BadgeLink";
import UX from "../../assets/Intelligence.svg";
import DEV from "../../assets/code.svg";
import QA from "../../assets/quality.svg";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { getUserInfo } = useAuth();
  const { xp } = getUserInfo();

  return (
    <S.Container>
      <S.ContentSection>
        <LevelBadge xp={xp} />
        <S.CoursesSection>
          <S.HeaderCoursesSection>
            <S.TitleHeader>Meus Cursos</S.TitleHeader>
            <S.LinkHeaderCoursesSection>
              Ver mais
              <S.ImgArrow src={Arrow} alt="Ícone de ver mais" />
            </S.LinkHeaderCoursesSection>
          </S.HeaderCoursesSection>
          <S.ViewCourses>
            <CourseBadge title="Frontend" percent={70} />
            <CourseBadge title="Backend" percent={50} />
            <CourseBadge title="Mobile" percent={45} />
            <CourseBadge title="Cloud" percent={90} />
          </S.ViewCourses>
        </S.CoursesSection>
        <S.TrailsSection>
          <S.TitleHeader>Trilhas</S.TitleHeader>
          <S.ViewTrails>
            <BadgeLink img={UX} title="UX/UI Design" />
            <BadgeLink img={DEV} title="DEV" />
            <BadgeLink img={QA} title="QA" />
          </S.ViewTrails>
        </S.TrailsSection>
      </S.ContentSection>
      <S.CalendarSection>Calendário</S.CalendarSection>
    </S.Container>
  );
};

export default Home;
