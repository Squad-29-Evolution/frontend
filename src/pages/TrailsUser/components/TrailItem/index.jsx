import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import S from "./style";
import BadgeIcon from "../BadgeIcon/";
import Certificate from "../../../../components/Certificate";
import useAuth from "../../../../hooks/useAuth";

const TrailItem = (props) => {
  const { getUserInfo } = useAuth();
  const { name } = getUserInfo();

  const getCertificate = async (event) => {
    event.preventDefault();
    const blob = await pdf(
      <Certificate
        name={name}
        trail={props.trail.name}
        hours={props.trail.hours}
      />,
    ).toBlob();
    saveAs(blob, "certificado.pdf");
  };

  return (
    <S.Container>
      <BadgeIcon
        img={props.trail.icon}
        title={props.trail.name}
        to={props.to}
      />
      <S.Content>
        <S.StatusView>
          <S.TitleStatus>Status</S.TitleStatus>
          <S.Percent>{props.trail.percent}% concluído</S.Percent>
        </S.StatusView>
        {props.trail.percent == 100 ? (
          <S.Button onClick={getCertificate}>Baixar Certificado</S.Button>
        ) : null}
      </S.Content>
    </S.Container>
  );
};

export default TrailItem;
