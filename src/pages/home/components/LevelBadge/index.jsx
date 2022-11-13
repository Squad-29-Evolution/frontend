import S from "./style";
import Star from "../../../../assets/star.svg";

const LevelBadge = () => {
  return (
    <S.Container>
      <S.RowLevels>
        <S.TextLevel>Nível 5</S.TextLevel>
        <S.TextLevel>Nível 6</S.TextLevel>
      </S.RowLevels>
      <S.Progress>
        <S.ProgressBarLevel width={20} />
      </S.Progress>
      <S.TextInstructionLevel>
        Mais 1200 XP para o próximo nível!
      </S.TextInstructionLevel>
      <S.IconStar src={Star} alt="Ícone de estrela" />
    </S.Container>
  );
};

export default LevelBadge;
