import TrailItem from "./components/TrailItem";
import S from "./style";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import api from "../../api";

const TrailsUser = () => {
  const { authUser, getUserInfo } = useAuth();
  const { token } = authUser;
  const user = getUserInfo();
  const [isLoading, setIsLoading] = useState(false);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    async function getResponse() {
      let trailsData = [];
      setIsLoading(true);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const response = await api.get(`/getSalvedTrails/${user.id}`, config);

      await Promise.all(
        response.data.map(async (item) => {
          const percent = await api.get(
            `/getpercentconcludedtrail/${user.id}&${item.trail_id}`,
            config,
          );

          let trailsResponse = await (
            await api.get(`/trail/${item.trail_id}`)
          ).data;

          trailsResponse.percent = percent.data;

          trailsData.push(trailsResponse);
        }),
      );
      setTrails(trailsData);

      setIsLoading(false);
    }

    getResponse();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.TrailsSection>
        <S.TitleTrailsSection>Trilhas</S.TitleTrailsSection>
        {trails.map((item) => {
          return (
            <TrailItem key={item.id} trail={item} to={`/courses/${item.id}`} />
          );
        })}
      </S.TrailsSection>
    </S.Container>
  );
};

export default TrailsUser;
