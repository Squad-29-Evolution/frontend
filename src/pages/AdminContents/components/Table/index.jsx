import S from "./style";
import Modal from "./Modal";
import { useState } from "react";

const Table = ({ data, setData, notify, token }) => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const [localContent, setLocalContent] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = (data) => {
    setLocalContent(data);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <S.ContainerOverFlow>
      {isOpenModal && (
        <Modal
          closeModal={closeModal}
          setData={setData}
          localContent={localContent}
          notify={notify}
          token={token}
        />
      )}
      <S.Table>
        <S.Header>
          <S.HRow>
            <S.Htext>Trilha</S.Htext>
          </S.HRow>

          <S.HRow>
            <S.Htext>Conteúdo</S.Htext>
          </S.HRow>

          <S.HRow>
            <S.Htext>Introdução ao curso</S.Htext>
          </S.HRow>
          <S.HRow>
            <S.Htext>Link</S.Htext>
          </S.HRow>
        </S.Header>

        <S.Body>
          {data.length > 0 ? (
            data.map(({ id, description, link, title, trail }) => (
              <S.BRow key={id}>
                <S.BContent>
                  <S.Btext>{trail.name}</S.Btext>
                </S.BContent>

                <S.BContent className="middle">
                  <S.Btext>{title}</S.Btext>
                </S.BContent>

                <S.BContent className="middle-left">
                  <S.ContentInfo>
                    <S.Btext>Neste episódio</S.Btext>
                    <S.Span title={description}>{description}</S.Span>
                  </S.ContentInfo>
                </S.BContent>

                <S.BContent>
                  <S.ContentInfo className="link">
                    <S.Btext title={link}>{link}</S.Btext>
                    <S.ButtonMore
                      title="botão abri menu"
                      name="button more"
                      onClick={() =>
                        openModal({ id, description, link, title, trail })
                      }
                    />
                  </S.ContentInfo>
                </S.BContent>
              </S.BRow>
            ))
          ) : (
            <S.NotContent>
              <p>Não foi encontrado nenhuma conteudo</p>
            </S.NotContent>
          )}
        </S.Body>
      </S.Table>
    </S.ContainerOverFlow>
  );
};

export default Table;
