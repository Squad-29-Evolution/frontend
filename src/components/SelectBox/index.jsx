import S from "./style";

const SelectBox = ({
  register,
  toggleActive,
  isActive,
  data,
  Label,
  setLabel,
  name,
}) => {
  return (
    <S.SelectBox onClick={toggleActive}>
      <S.OptionsContaine className={isActive ? "active" : "closed"}>
        {data.map(({ name: dataName, id }) => (
          <S.Option
            key={id}
            onClick={() => {
              setLabel(dataName);
            }}
          >
            <S.Radio type="radio" id={name} {...register(name)} value={id} />
            <p>{dataName}</p>
          </S.Option>
        ))}
      </S.OptionsContaine>

      <S.Selected>{Label}</S.Selected>
    </S.SelectBox>
  );
};

export default SelectBox;
