import ContentItem from "./components/ContentItem";
import S from "./style";
import QA from "../../assets/quality.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api";
import useAuth from "../../hooks/useAuth";

const Courses = () => {
  const { trail_id } = useParams();
  const { authUser, getUserInfo } = useAuth();
  const [contents, setContents] = useState([]);
  const { id } = getUserInfo();
  const { token } = authUser;

  useEffect(() => {
    async function getResponse() {
      if (trail_id == 0) {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const salvedTrails = await api.get(`/getSalvedTrails/${id}`, config);

        let contentsUser = [];

        if (salvedTrails.data) {
          let allContents = await api.get("/contents");

          salvedTrails.data.map((itemTrail) => {
            allContents.data.map((item) => {
              if (item.trail_id == itemTrail.trail_id) {
                contentsUser.push(item);
              }
            });
          });
        }

        setContents(contentsUser);
      } else {
        const response = await api.get("/contents");
        const contentData = response.data.filter(
          (item) => item.trail_id == trail_id,
        );
        setContents(contentData);
      }
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
