import LevelBadge from "./components/LevelBadge";
import Arrow from "../../assets/arrow.svg";
import S from "./style";
import CourseBadge from "./components/CourseBadge";
import BadgeLink from "../../components/BadgeLink";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import api from "../../api";
import Loading from "../../components/Loading";

const Home = () => {
  const { getUserInfo, authUser } = useAuth();
  const { id, xp } = getUserInfo();
  const { token } = authUser;
  const [trails, setTrails] = useState([]);
  const [contents, setContents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getResponse() {
      try {
        setIsLoading(true);

        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const allTrails = await api.get("/trail");
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

        setTrails(allTrails.data);
        setContents(contentsUser.slice(0, 4));

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getResponse();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.ContentSection>
        <LevelBadge xp={xp} />
        <S.CoursesSection>
          <S.HeaderCoursesSection>
            <S.TitleHeader>Meus Cursos</S.TitleHeader>
            <S.LinkHeaderCoursesSection to={`/courses/${0}`}>
              Ver mais
              <S.ImgArrow src={Arrow} alt="Ícone de ver mais" />
            </S.LinkHeaderCoursesSection>
          </S.HeaderCoursesSection>
          <S.ViewCourses>
            {contents.map((item) => {
              return (
                <CourseBadge
                  key={item.id}
                  to={`/content/${item.id}/${item.trail_id}`}
                  title={item.title}
                  trail={item.trail?.name}
                  icon={item.trail?.icon}
                />
              );
            })}
          </S.ViewCourses>
        </S.CoursesSection>
        <S.TrailsSection>
          <S.TitleHeader>Trilhas</S.TitleHeader>
          <S.ViewTrails>
            {trails.map((item) => {
              return (
                <BadgeLink
                  key={item.id}
                  id={item.id}
                  title={item.name}
                  img={item.icon}
                />
              );
            })}
          </S.ViewTrails>
        </S.TrailsSection>
      </S.ContentSection>
    </S.Container>
  );
};

export default Home;
