import S from "./style";
import ContentIcon from "../../../../assets/content.svg";

const CourseBadge = (props) => {
  return (
    <S.Container to={props.to}>
      <S.Icon src={ContentIcon} alt="Ícone de curso" />
      <S.Title>{props.title}</S.Title>
    </S.Container>
  );
};

export default CourseBadge;
