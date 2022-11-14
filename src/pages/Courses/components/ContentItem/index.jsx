import S from "./style";
import BadgeLink from "../../../../components/BadgeLink";

const ContentItem = (props) => {
  return (
    <S.Container>
      <BadgeLink to={props.to} img={props.img} title={props.title} />
      <S.DescriptionContent>
        <S.TitleDescriptionContent>{props.title}</S.TitleDescriptionContent>
        <S.TextDescriptionContent>{props.description}</S.TextDescriptionContent>
      </S.DescriptionContent>
    </S.Container>
  );
};

export default ContentItem;
