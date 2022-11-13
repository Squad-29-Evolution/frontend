import { Outlet } from "react-router-dom";
import S from "./style";
import Header from "../Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const PrivateAreaAdmin = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closedModal = () => {
    setIsOpenModal(false);
  };

  return (
    <S.Container>
      <Header admin={true} onClick={openModal} />
      <S.Main>
        <Sidebar isOpen={isOpenModal} closedModal={closedModal} />
        <S.ContentOutlet>
          <S.ContentBG />
          <Outlet />
        </S.ContentOutlet>
      </S.Main>
    </S.Container>
  );
};

export default PrivateAreaAdmin;
