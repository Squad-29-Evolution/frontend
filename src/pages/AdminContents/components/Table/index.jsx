import S from "./style";
import Modal from "./Modal";
import { useState } from "react";

const Table = ({ data, setData, notify, token }) => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const [localTrail, setLocalTrail] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = (data) => {
    setLocalTrail(data);
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
          localTrail={localTrail}
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
                  <S.Description>{title}</S.Description>
                </S.BContent>

                <S.BContent className="middle-left">
                  <S.ContentInfo>
                    <S.Btext>Neste episódio</S.Btext>
                    <S.Span>{description}</S.Span>
                  </S.ContentInfo>
                </S.BContent>

                <S.BContent>
                  <S.Btext>{link}</S.Btext>
                </S.BContent>
              </S.BRow>
            ))
          ) : (
            <S.NotContent>
              <p>Não foi encontrado nenhuma trilha</p>
            </S.NotContent>
          )}
        </S.Body>
      </S.Table>
    </S.ContainerOverFlow>
  );
};

export default Table;
