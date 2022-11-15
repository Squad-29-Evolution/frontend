import S from "./style";
import Logo from "../../assets/logo_orange.svg";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const SelectTrail = () => {
  const { authUser, getUserInfo } = useAuth();
  const { token } = authUser;
  const { id: UserId } = getUserInfo();
  const [trailList, setTrailList] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getAllTrails = async () => {
    setLoading(true);
    const { data } = await api.get("/trail");
    setTrailList(data);
    return setLoading(false);
  };

  const SalveFirstTrail = async (id) => {
    setLoading(true);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const infos = { user_id: UserId, trail_id: id };
    try {
      await api.post("/salvenewtrail", infos, config);
      localStorage.setItem("firstLogin", "false");
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTrails();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.BG />
      <S.Header>
        <S.Icon>
          <img src={Logo} alt="orange logo" />
        </S.Icon>
      </S.Header>
      <S.Main>
        <S.WrapperGeneric>
          <S.Title>Trilhas</S.Title>
          <S.WrapperTrail>
            {trailList.map(({ name, icon, id, description }) => (
              <S.CardContent
                title={description}
                key={id}
                onClick={() => SalveFirstTrail(id)}
              >
                <S.ContentImg src={icon} alt="logo " />
                <S.ContentName>{name}</S.ContentName>
              </S.CardContent>
            ))}
          </S.WrapperTrail>
        </S.WrapperGeneric>
      </S.Main>
    </S.Container>
  );
};

export default SelectTrail;
