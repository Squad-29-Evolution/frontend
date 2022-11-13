import S from "./style";

const WrapperCount = () => {
  return (
    <S.WrapperCount>
      <S.CountBlock>
        <S.Number>12</S.Number>
        <S.Text>membros</S.Text>
      </S.CountBlock>

      <S.CountBlock className="middle">
        <S.Number>3</S.Number>
        <S.Text>convidados</S.Text>
      </S.CountBlock>

      <S.CountBlock>
        <S.Number>1</S.Number>
        <S.Text>bloqueado</S.Text>
      </S.CountBlock>
    </S.WrapperCount>
  );
};

export default WrapperCount;
