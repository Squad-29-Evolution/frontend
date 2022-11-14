import ContentItem from "./components/ContentItem";
import S from "./style";
import QA from "../../assets/quality.svg";
import BadgeLink from "../../components/BadgeLink";

const Courses = () => {
  return (
    <S.Container>
      <S.ContentsCourse>
        <S.TitleSection>Dev</S.TitleSection>
        <ContentItem
          img={QA}
          title="Fundamentos"
          description="Praesent varius auctor pretium. Fusce luctus libero at orci suscipit blandit. Nulla blandit metus id ex laoreet venenatis. Fusce nec quam ultrices, finibus nisl in, auctor neque. Fusce sodales e
"
          concluded={false}
        />
        <ContentItem
          img={QA}
          title="Fundamentos"
          description="Praesent varius auctor pretium. Fusce luctus libero at orci suscipit blandit. Nulla blandit metus id ex laoreet venenatis. Fusce nec quam ultrices, finibus nisl in, auctor neque. Fusce sodales e
"
          concluded={true}
        />
        <ContentItem
          img={QA}
          title="Fundamentos"
          description="Praesent varius auctor pretium. Fusce luctus libero at orci suscipit blandit. Nulla blandit metus id ex laoreet venenatis. Fusce nec quam ultrices, finibus nisl in, auctor neque. Fusce sodales e
"
          concluded={true}
        />
        <ContentItem
          img={QA}
          title="Fundamentos"
          description="Praesent varius auctor pretium. Fusce luctus libero at orci suscipit blandit. Nulla blandit metus id ex laoreet venenatis. Fusce nec quam ultrices, finibus nisl in, auctor neque. Fusce sodales e
"
          concluded={false}
        />
      </S.ContentsCourse>
      <S.CoursesView>
        <S.TitleSection>Cursos</S.TitleSection>
        <S.ContentCoursesView>
          <BadgeLink img={QA} title="DEV" />
          <BadgeLink img={QA} title="DEV" />
          <BadgeLink img={QA} title="DEV" />
          <BadgeLink img={QA} title="DEV" />
          <BadgeLink img={QA} title="DEV" />
          <BadgeLink img={QA} title="DEV" />
        </S.ContentCoursesView>
      </S.CoursesView>
    </S.Container>
  );
};

export default Courses;
