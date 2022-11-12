import { Outlet } from "react-router-dom";
import S from "./style";
import Header from "../Header";

const PrivateArea = () => {
  return (
    <S.Container>
      <Header />
      <main>
        {/* <Sidebar /> */}
        <Outlet />
      </main>
    </S.Container>
  );
};

export default PrivateArea;
