import ContentItem from "./components/ContentItem";
import S from "./style";
import QA from "../../assets/quality.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api";

const Courses = () => {
  const { trail_id } = useParams();
  const [contents, setContents] = useState([]);

  useEffect(() => {
    async function getResponse() {
      const response = await api.get("/contents");
      const contentData = response.data.filter(
        (item) => item.trail_id == trail_id,
      );
      setContents(contentData);
    }

    getResponse();
  }, []);

  return (
    <S.Container>
      <S.ContentsCourse>
        <S.TitleSection>Cursos</S.TitleSection>
        <S.ViewContents>
          {contents.map((item) => {
            return (
              <ContentItem
                img={QA}
                to={`/content/${item.id}/${item.trail_id}`}
                title={item.title}
                description={item.description}
                concluded={false}
              />
            );
          })}
        </S.ViewContents>
      </S.ContentsCourse>
    </S.Container>
  );
};

export default Courses;
