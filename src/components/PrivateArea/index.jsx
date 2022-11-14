import { Outlet, useLocation } from "react-router-dom";
import S from "./style";
import Header from "../Header";
import Sidebar from "./SideBar";

const PrivateArea = () => {
  const location = useLocation();

  return (
    <S.Container>
      <Header />
      <S.Main>
        {location.pathname == "/content" ? null : <Sidebar />}
        <S.ContentOutlet>
          <Outlet />
        </S.ContentOutlet>
      </S.Main>
    </S.Container>
  );
};

export default PrivateArea;
