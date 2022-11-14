import S from "./style";
import Code from "../../assets/code.svg";
import Link from "../../assets/link.svg";

const Content = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Img src={Code} />
        <S.Title>Fundamentos</S.Title>
      </S.Header>
      <S.Content>
        <S.TitleDescription>Introdução</S.TitleDescription>
        <S.Description>
          Praesent varius auctor pretium. Fusce luctus libero at orci suscipit
          blandit. Nulla blandit metus id ex laoreet venenatis. Fusce nec quam
          ultrices, finibus nisl in, auctor neque. Fusce sodales erat eget
          tellus efficitur, sit amet venenatis leo interdum. Praesent dictum,
          enim vitae elementum dignissim, lorem lacus congue lacus, vel
          vulputate magna odio sed felis. Nunc tempor tellus quis risus
          tristique rutrum. Mauris elementum elit enim, vel facilisis odio
          viverra nec. Maecenas aliquam, dolor a posuere aliquet, lorem turpis
          gravida diam, vitae finibus erat mi in magna. Duis iaculis quam ac
          magna vehicula, in fermentum augue tempus. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam
          vel arcu quis risus tempor sagittis.
        </S.Description>
        <S.Table>
          <thead>
            <tr>
              <S.HeaderTable>Databases</S.HeaderTable>
            </tr>
          </thead>
          <tbody>
            <tr>
              <S.ContentTable>
                <S.ImgLink src={Link} alt="Ícone de link" />
                <S.TextContentTable
                  href="www.varius auctor pretium.com.br
"
                >
                  www.varius auctor pretium.com.br
                </S.TextContentTable>
              </S.ContentTable>
            </tr>
            <tr>
              <S.ContentTable>
                <S.ImgLink src={Link} alt="Ícone de link" />
                <S.TextContentTable
                  href="www.varius auctor pretium.com.br
"
                >
                  www.varius auctor pretium.com.br
                </S.TextContentTable>
              </S.ContentTable>
            </tr>
          </tbody>
        </S.Table>

        <S.ButtonConcluded>
          <S.TextButtonConcluded>Concluído</S.TextButtonConcluded>
        </S.ButtonConcluded>
      </S.Content>
    </S.Container>
  );
};

export default Content;
