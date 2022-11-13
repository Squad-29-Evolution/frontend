import { Outlet } from "react-router-dom";
import S from "./style";
import Header from "../Header";
import Sidebar from "./SideBar";

const PrivateArea = () => {
  return (
    <S.Container>
      <Header />
      <S.Main>
        <Sidebar />
        <S.ContentOutlet>
          <Outlet />
        </S.ContentOutlet>
      </S.Main>
    </S.Container>
  );
};

export default PrivateArea;
