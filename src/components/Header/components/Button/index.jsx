import S from "./style";

const Button = ({ admin, onClick }) => {
  return (
    <S.Button
      onClick={onClick}
      type="button"
      arial-label="botão mobile"
      title="botão mobile"
      name="button menu"
      admin={admin}
    >
      <div></div>
    </S.Button>
  );
};

export default Button;
