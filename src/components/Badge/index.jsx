import S from "./style";

const BadgeLink = (props) => {
  return (
    <S.Container>
      <S.Img src={props.img} />
      <S.Title>{props.title}</S.Title>
    </S.Container>
  );
};

export default BadgeLink;
