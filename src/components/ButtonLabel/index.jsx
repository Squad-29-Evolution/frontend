import S from "./style";

const ButtonLabel = ({ children, onClick, type }) => {
  return (
    <S.Button type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default ButtonLabel;
