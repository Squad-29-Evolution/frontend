import S from "./style";
import QA from "../../../../assets/quality.svg";

const ContentItem = (props) => {
  return (
    <S.Container>
      <S.LinkContainer to={props.to}>
        <S.ImgLink src={QA} />
        <S.TitleLink>{props.title}</S.TitleLink>
      </S.LinkContainer>
      <S.DescriptionContent>
        <S.TitleDescriptionContent>{props.title}</S.TitleDescriptionContent>
        <S.TextDescriptionContent>{props.description}</S.TextDescriptionContent>
        <S.StatusView>
          <S.TitleStatusView>STATUS</S.TitleStatusView>
          <S.BadgeStatus concluded={props.concluded}>
            {props.concluded == true ? "Concluído" : "Em aberto"}
          </S.BadgeStatus>
        </S.StatusView>
      </S.DescriptionContent>
    </S.Container>
  );
};

export default ContentItem;
