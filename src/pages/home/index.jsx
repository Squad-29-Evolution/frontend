import LevelBadge from "./components/LevelBadge";
import Arrow from "../../assets/arrow.svg";
import S from "./style";
import CourseBadge from "./components/CourseBadge";

const Home = () => {
  return (
    <S.Container>
      <S.ContentSection>
        <LevelBadge />
        <S.CoursesSection>
          <S.HeaderCoursesSection>
            <S.TitleHeaderCoursesSection>
              Meus Cursos
            </S.TitleHeaderCoursesSection>
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
      </S.ContentSection>
      <S.CalendarSection>Calendário</S.CalendarSection>
    </S.Container>
  );
};

export default Home;
