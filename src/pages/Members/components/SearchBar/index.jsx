import S from "./style";
import Search from "../../../../assets/search.svg";

const SearchBar = () => {
  return (
    <S.Label>
      <img src={Search} alt="lupa" />
      <S.Input></S.Input>
    </S.Label>
  );
};

export default SearchBar;
