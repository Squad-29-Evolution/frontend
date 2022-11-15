import TrailItem from "./components/TrailItem";
import S from "./style";
import UX from "../../assets/Intelligence.svg";

const TrailsUser = () => {
  return (
    <S.Container>
      <S.TrailsSection>
        <S.TitleTrailsSection>Trilhas</S.TitleTrailsSection>
        <TrailItem percent={20} title="UX Design" img={UX} />
        <TrailItem percent={10} title="UX Design" img={UX} />
        <TrailItem percent={100} title="UX Design" img={UX} />
        <TrailItem percent={100} title="UX Design" img={UX} />
      </S.TrailsSection>
    </S.Container>
  );
};

export default TrailsUser;
