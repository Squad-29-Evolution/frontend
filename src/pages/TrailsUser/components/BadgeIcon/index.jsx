import S from "./style";

const BadgeIcon = (props) => {
  return (
    <S.Container to={props.to}>
      <S.Img src={props.img} />
      <S.Title>{props.title}</S.Title>
    </S.Container>
  );
};

export default BadgeIcon;
