import S from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import InputLabel from "../../../../components/InputLabel";
import ButtonLabel from "../../../../components/ButtonLabel";

const Form = () => {
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    console.log("foi");
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Bem vinda(o) de volta!</S.Title>
        <S.InputContainer>
          <S.GenericContainer>
            <InputLabel
              type="text"
              register={register}
              name={"email"}
              label={"E-mail ou ID"}
            />
          </S.GenericContainer>

          <S.GenericContainer>
            <InputLabel
              type="password"
              register={register}
              name={"password"}
              label={"Senha"}
            />
            <S.RecoveryPassword to="/">Esqueceu a senha?</S.RecoveryPassword>
          </S.GenericContainer>
          <ButtonLabel type="submit">Entrar</ButtonLabel>
          <S.CreateAccount>
            Ainda não tem uma conta? <S.Span to="/">Registre-se</S.Span>
          </S.CreateAccount>
        </S.InputContainer>
      </S.Form>
    </S.Container>
  );
};

export default Form;
