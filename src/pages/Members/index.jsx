import S from "./style";
import WrapperCount from "./components/WrapperCount";
import SearchBar from "./components/SearchBar";

const Members = () => {
  return (
    <S.Container>
      <S.NewButton>+ Adicionar novo administrador</S.NewButton>
      <S.WrapperGeneric>
        <WrapperCount />
        <SearchBar />
      </S.WrapperGeneric>
    </S.Container>
  );
};

export default Members;
