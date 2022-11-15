import S from "./style";
import Search from "../../../../assets/search.svg";

const SearchBar = ({ inpuValue, setInputValue, onKeyUp }) => {
  return (
    <S.Label>
      <img src={Search} alt="lupa" />
      <S.Input
        type="text"
        placeholder="Digite o nome do conteúdo"
        value={inpuValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={onKeyUp}
      ></S.Input>
    </S.Label>
  );
};

export default SearchBar;
