import S from "./style";
import Code from "../../../../assets/code.svg";

const CourseBadge = (props) => {
  return (
    <S.Container>
      <S.Icon src={Code} alt="Íconde de DEV" />
      <S.Title>{props.title}</S.Title>
      <S.Progress>
        <S.ProgressBarLevel width={props.percent} />
      </S.Progress>
      <S.ProgressTextIndicator>
        {props.percent}% concluído
      </S.ProgressTextIndicator>
    </S.Container>
  );
};

export default CourseBadge;
