import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import S from "./style";
import Header from "../Header";
import Sidebar from "./SideBar";

const PrivateArea = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closedModal = () => {
    setIsOpenModal(false);
  };

  const location = useLocation();

  return (
    <S.Container>
      <Header onClick={openModal} />
      <S.Main>
        {location.pathname == "/content" ? null : (
          <Sidebar isOpen={isOpenModal} closedModal={closedModal} />
        )}
        <S.ContentOutlet>
          <Outlet />
        </S.ContentOutlet>
      </S.Main>
    </S.Container>
  );
};

export default PrivateArea;
