import S from "./style";
import Modal from "./Modal";
import { useState } from "react";

const Table = ({ data, setData, notify, token }) => {
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
            <S.Htext>Nome</S.Htext>
          </S.HRow>

          <S.HRow>
            <S.Htext>Descrição</S.Htext>
          </S.HRow>

          <S.HRow>
            <S.Htext>Horas</S.Htext>
          </S.HRow>
        </S.Header>

        <S.Body>
          {data.length > 0 ? (
            data.map((trail) => (
              <S.BRow key={trail.id}>
                <S.BContent className="flexStart">
                  <S.ContentPicture>
                    <img src={trail.icon} alt="g" />
                  </S.ContentPicture>
                  <S.ContentInfo>
                    <S.Btext>{trail.name}</S.Btext>
                  </S.ContentInfo>
                </S.BContent>

                <S.BContent className="middle">
                  <S.Description>{trail.description}</S.Description>
                </S.BContent>

                <S.BContent>
                  <S.Btext>{trail.hours}</S.Btext>
                  <S.ButtonMore
                    title="botão abri menu"
                    name="button more"
                    onClick={() => openModal(trail)}
                  />
                </S.BContent>
              </S.BRow>
            ))
          ) : (
            <S.NotTrail>
              <p>Não foi encontrado nenhuma trilha</p>
            </S.NotTrail>
          )}
        </S.Body>
      </S.Table>
    </S.ContainerOverFlow>
  );
};

export default Table;
