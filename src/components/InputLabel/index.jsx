import S from "./style";

const InputLabel = ({ name, placeholder, type, register, onFocus, label }) => {
  return (
    <S.Label>
      <S.Title>{label}</S.Title>
      <S.Input
        {...register(name)}
        name={name}
        placeholder={placeholder}
        type={type}
        onFocus={onFocus}
      />
    </S.Label>
  );
};

export default InputLabel;
