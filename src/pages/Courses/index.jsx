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
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      if (parseInt(trail_id) == 0) {
        const salvedTrails = await api.get(`/getSalvedTrails/${id}`, config);

        if (salvedTrails.data) {
          let contentsUser = [];
          let allContents = await api.get("/contents");
          let concludedCourses = await api.get(
            `/getallconcludedcourse/${id}&${parseInt(trail_id)}`,
            config,
          );

          salvedTrails.data.map((itemTrail) => {
            allContents.data.map((item) => {
              if (item.trail_id == itemTrail.trail_id) {
                contentsUser.push(item);
              }
            });
          });

          contentsUser.map((item) => {
            item.visible = false;
          });

          setContents(contentsUser);
        }
      } else {
        const response = await api.get("/contents");
        let concludedCoursesTrail = await api.get(
          `/getallconcludedcourse/${id}&${parseInt(trail_id)}`,
          config,
        );

        const contentData = response.data.filter(
          (item) => item.trail_id == parseInt(trail_id),
        );

        concludedCoursesTrail.data.map((itemConcluded) => {
          contentData.map((item) => {
            if (itemConcluded.contentsId == item.id) {
              if (itemConcluded.status == "FINISHED") {
                item.concluded = true;
              } else {
                item.concluded = false;
              }
            }
          });
        });

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
                key={item.id}
                img={QA}
                to={`/content/${item.id}/${item.trail_id}`}
                title={item.title}
                description={item.description}
                concluded={item.concluded}
              />
            );
          })}
        </S.ViewContents>
      </S.ContentsCourse>
    </S.Container>
  );
};

export default Courses;
