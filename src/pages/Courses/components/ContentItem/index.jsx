import S from "./style";
import BadgeLink from "../../../../components/BadgeLink";

const ContentItem = (props) => {
  return (
    <S.Container>
      <BadgeLink to={props.to} img={props.img} title={props.title} />
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
