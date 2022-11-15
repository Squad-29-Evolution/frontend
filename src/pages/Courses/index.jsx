import ContentItem from "./components/ContentItem";
import S from "./style";
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
          const { data: allContents } = await api.get("/contents");

          const trails = salvedTrails.data;

          const getAllConcludedCourses = async (trail_id) => {
            const { data } = await api.get(
              `/getallconcludedcourse/${id}&${parseInt(trail_id)}`,
              config,
            );
            return data;
          };
          const listOnfConcludedCourses = trails.map(({ trail_id }) => {
            return getAllConcludedCourses(trail_id);
          });

          const allConcludedCourses = await Promise.all(
            listOnfConcludedCourses,
          );

          const filterContents = trails.map((trail) => {
            return allContents.filter(
              (course) => course.trail_id == trail.trail_id,
            );
          });

          const reduceFilterContents = filterContents.reduce(
            (list, sub) => list.concat(sub),
            [],
          );

          if (allConcludedCourses[0].length == 0) {
            return setContents(reduceFilterContents);
          }

          const AllCourses = allConcludedCourses.map((Listconcludedcourse) => {
            return Listconcludedcourse.map((concludedcourse) => {
              return reduceFilterContents.map((course) => {
                if (course.id == concludedcourse.contentsId) {
                  return { ...course, concluded: true };
                }
                return { ...course, concluded: false };
              });
            });
          });

          const contents = AllCourses.reduce(
            (list, sub) => list.concat(sub),
            [],
          );
          setContents([...contents[0]]);
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
  }, [trail_id]);

  return (
    <S.Container>
      <S.ContentsCourse>
        <S.TitleSection>Cursos</S.TitleSection>
        <S.ViewContents>
          {contents.map((item) => {
            return (
              <ContentItem
                key={item.id}

                to={`/content/${item.id}/${item.trail_id}`}
                title={item.title}
                description={item.description}
                concluded={item.concluded}
                trail={item.trail?.name}
                icon={item.trail?.icon}
              />
            );
          })}
        </S.ViewContents>
      </S.ContentsCourse>
    </S.Container>
  );
};

export default Courses;
