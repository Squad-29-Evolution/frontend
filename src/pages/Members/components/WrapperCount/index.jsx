import S from "./style";

const WrapperCount = ({ usersCount }) => {
  return (
    <S.WrapperCount>
      <S.CountBlock>
        <S.Number>{usersCount.member}</S.Number>
        <S.Text>membros</S.Text>
      </S.CountBlock>

      <S.CountBlock className="middle">
        <S.Number>{usersCount.admin}</S.Number>
        <S.Text>Convidados</S.Text>
      </S.CountBlock>

      <S.CountBlock>
        <S.Number>1</S.Number>
        <S.Text>bloqueado</S.Text>
      </S.CountBlock>
    </S.WrapperCount>
  );
};

export default WrapperCount;
