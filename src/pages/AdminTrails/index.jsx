import { useState, useEffect } from "react";
import S from "./style";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import api from "../../api/index";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading";
import Modal from "./components/Modal";
import { toast } from "react-toastify";

const AdminTrails = () => {
  useDocumentTitle("Trilhas");

  const { authUser } = useAuth();
  const { token } = authUser;

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [inpuValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  const getAllTrails = async () => {
    setIsLoading(true);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await api.get("/trail", config);
    setData(data);
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
    const filterData = data.filter((trail) => {
      const { name } = trail;
      const lowerCaseEmail = parserToLowerCase(name);
      return lowerCaseEmail.includes(lowerCaseInput);
    });
    return setSearchData(filterData);
  };

  useEffect(() => {
    getAllTrails();
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

      <S.Header>
        <S.NewButton type="button" onClick={openModal}>
          + Adicionar nova trilha
        </S.NewButton>
        <SearchBar
          inpuValue={inpuValue}
          setInputValue={setInputValue}
          onKeyUp={searchFunction}
        />
      </S.Header>

      <S.WrapperGeneric>
        {searchData.length > 0 ? (
          <Table data={searchData} />
        ) : (
          <Table data={data} setData={setData} notify={notify} token={token} />
        )}
      </S.WrapperGeneric>
    </S.Container>
  );
};

export default AdminTrails;
