import S from "./style";
import ContentIcon from "../../../../assets/content.svg";

const ContentItem = (props) => {
  return (
    <S.Container>
      <S.LinkContainer to={props.to}>
        <S.ImgLink src={props.icon ? props.icon : ContentIcon} />
        <S.TitleLink>{props.trail}</S.TitleLink>
      </S.LinkContainer>
      <S.DescriptionContent>
        <S.TitleDescriptionContent>{props.title}</S.TitleDescriptionContent>
        <S.TextDescriptionContent>{props.description}</S.TextDescriptionContent>
        <S.StatusView concluded={props.concluded}>
          <S.BadgeStatus concluded={props.concluded}>
            {props.concluded == true ? "Concluído" : "Em aberto"}
          </S.BadgeStatus>
        </S.StatusView>
      </S.DescriptionContent>
    </S.Container>
  );
};

export default ContentItem;
