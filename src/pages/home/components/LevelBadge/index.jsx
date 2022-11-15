import S from "./style";
import Star from "../../../../assets/star.svg";

const LevelBadge = ({ xp }) => {
  console.log(xp);

  const getPercent = () => {
    const percentage = (xp / 900) * 100;
    return percentage;
  };

  return (
    <S.Container>
      <S.GenericContaine>
        <S.RowLevels>
          <S.TextLevel>Nível 1</S.TextLevel>
          <S.TextLevel>Nível 2</S.TextLevel>
        </S.RowLevels>
        <S.Progress percentage={getPercent()}></S.Progress>
        <S.TextInstructionLevel>
          {`Mais ${900 - xp} XP para o próximo nível!`}
        </S.TextInstructionLevel>
        <S.IconStar src={Star} alt="Ícone de estrela" />
      </S.GenericContaine>
    </S.Container>
  );
};

export default LevelBadge;
