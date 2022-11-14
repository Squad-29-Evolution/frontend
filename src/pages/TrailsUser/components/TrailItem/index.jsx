import S from "./style";
import BadgeIcon from "../BadgeIcon/";

const TrailItem = (props) => {
  return (
    <S.Container>
      <BadgeIcon img={props.img} title={props.title} />
      <S.Content>
        <S.StatusView>
          <S.TitleStatus>Status</S.TitleStatus>
          <S.Percent>{props.percent}% concluído</S.Percent>
        </S.StatusView>
        {props.percent == 100 ? <S.Button>Baixar Certificado</S.Button> : null}
      </S.Content>
    </S.Container>
  );
};

export default TrailItem;
