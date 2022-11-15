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
import { toast } from "react-toastify";

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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [inpuValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  const setTotalMember = (data) => {
    console.log(data);
    /* const totalUser = data.filter((user) => {
      return user.role == "USER";
    }); */

    const totalAdminWithoutLogin = data.filter((user) => {
      return user.role == "ADMIN" && user.Dates?.length == 0;
    });

    return setUsersCount({
      member: data.length,
      admin: totalAdminWithoutLogin.length,
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

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const parserToLowerCase = (string) => {
    return string.toLowerCase();
  };

  const searchFunction = () => {
    const lowerCaseInput = parserToLowerCase(inpuValue);
    const filterData = data.filter((user) => {
      const { email } = user;
      const lowerCaseEmail = parserToLowerCase(email);
      return lowerCaseEmail.includes(lowerCaseInput);
    });
    return setSearchData(filterData);
  };

  useEffect(() => {
    getAllusers();
  }, []);

  const notify = (type, message) =>
    toast[type](message, {
      position: "bottom-left",
      autoClose: 1400,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      index: 5,
    });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.ToastContainerCss />
      {isOpenModal && (
        <Modal
          setData={setData}
          closeModal={closeModal}
          notify={notify}
          token={token}
        />
      )}
      <S.NewButton type="button" onClick={openModal}>
        + Adicionar novo administrador
      </S.NewButton>

      <S.WrapperGeneric className="fixed">
        <WrapperCount usersCount={usersCount} />
        <SearchBar
          inpuValue={inpuValue}
          setInputValue={setInputValue}
          onKeyUp={searchFunction}
        />
      </S.WrapperGeneric>

      <S.WrapperGeneric>
        {searchData.length > 0 ? (
          <Table data={searchData} />
        ) : (
          <Table data={data} />
        )}
      </S.WrapperGeneric>
    </S.Container>
  );
};

export default Members;
