import S from "./style";
import Code from "../../../../assets/code.svg";

const CourseBadge = (props) => {
  return (
    <S.Container to={props.to}>
      <S.Icon src={Code} alt="Íconde de DEV" />
      <S.Title>{props.title}</S.Title>
    </S.Container>
  );
};

export default CourseBadge;
