import LevelBadge from "./components/LevelBadge";
import S from "./style";

const Home = () => {
  return (
    <S.Container>
      <S.ContentSection>
        <LevelBadge />
      </S.ContentSection>
      <S.CalendarSection>Calendário</S.CalendarSection>
    </S.Container>
  );
};

export default Home;
