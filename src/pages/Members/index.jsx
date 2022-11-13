import { useState, useEffect } from "react";
import S from "./style";
import WrapperCount from "./components/WrapperCount";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import api from "../../api/index";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading";
import Modal from "./components/Modal";

const Members = () => {
  useDocumentTitle("Membros");

  const { authUser } = useAuth();
  const { token } = authUser;

  const [isLoading, setIsLoading] = useState(false);
  const [usersCount, setUsersCount] = useState({
    member: 0,
    admin: 0,
  });
  const [data, setData] = useState([]);

  const setTotalMember = (data) => {
    const totalUser = data.filter((user) => {
      return user.role == "USER";
    });

    const totalAdmin = data.filter((user) => {
      return user.role == "ADMIN";
    });

    return setUsersCount({
      member: totalUser.length,
      admin: totalAdmin.length,
    });
  };

  const getAllusers = async () => {
    setIsLoading(true);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await api.get("/users", config);
    setData(data);
    setTotalMember(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllusers();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <Modal />
      <S.NewButton>+ Adicionar novo administrador</S.NewButton>

      <S.WrapperGeneric className="fixed">
        <WrapperCount usersCount={usersCount} />
        <SearchBar />
      </S.WrapperGeneric>

      <S.WrapperGeneric>
        <Table data={data} />
      </S.WrapperGeneric>
    </S.Container>
  );
};

export default Members;
