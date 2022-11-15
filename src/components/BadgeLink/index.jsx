import useAuth from "../../hooks/useAuth";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import S from "./style";

const BadgeLink = (props) => {
  const { authUser, getUserInfo } = useAuth();
  const user = getUserInfo();
  const { token } = authUser;
  const navigate = useNavigate();

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const salvedTrail = async () => {
    let exists;

    const salvedCourses = await api.get(`/getSalvedTrails/${user.id}`, config);

    salvedCourses.data.map((item) => {
      if (item.trail_id == props.id) {
        exists = true;
      }
    });

    if (exists == true) {
      navigate(`/courses/${props.id}`);
    } else {
      try {
        await api.post(
          "/salvenewtrail",
          { user_id: user.id, trail_id: props.id },
          config,
        );

        navigate(`/courses/${props.id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <S.Container onClick={salvedTrail}>
      <S.Img src={props.img} />
      <S.Title>{props.title}</S.Title>
    </S.Container>
  );
};

export default BadgeLink;
