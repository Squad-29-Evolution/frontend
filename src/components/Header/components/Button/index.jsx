import S from "./style";

const Button = ({ onClick }) => {
  return (
    <S.Button
      onClick={onClick}
      type="button"
      arial-label="botão mobile"
      title="botão mobile"
      name="button menu"
    >
      <div></div>
    </S.Button>
  );
};

export default Button;
