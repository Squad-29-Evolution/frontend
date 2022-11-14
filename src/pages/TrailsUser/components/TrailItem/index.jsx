import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import S from "./style";
import BadgeIcon from "../BadgeIcon/";
import Certificate from "../../../../components/Certificate";

const TrailItem = (props) => {
  const getCertificate = async (event) => {
    event.preventDefault();
    const blob = await pdf(
      <Certificate name="USUÁRIO TESTE" trail="UX Design" hours={100} />,
    ).toBlob();
    saveAs(blob, "certificado.pdf");
  };

  return (
    <S.Container>
      <BadgeIcon img={props.img} title={props.title} />
      <S.Content>
        <S.StatusView>
          <S.TitleStatus>Status</S.TitleStatus>
          <S.Percent>{props.percent}% concluído</S.Percent>
        </S.StatusView>
        {props.percent == 100 ? (
          <S.Button onClick={getCertificate}>Baixar Certificado</S.Button>
        ) : null}
      </S.Content>
    </S.Container>
  );
};

export default TrailItem;
