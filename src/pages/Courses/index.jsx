import ContentItem from "./components/ContentItem";
import S from "./style";
import QA from "../../assets/quality.svg";

const Courses = () => {
  return (
    <S.Container>
      <S.ContentsCourse>
        <S.TitleCourse>Dev</S.TitleCourse>
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
    </S.Container>
  );
};

export default Courses;
