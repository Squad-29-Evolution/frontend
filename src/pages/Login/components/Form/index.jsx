import S from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import InputLabel from "../../../../components/InputLabel";
import ButtonLabel from "../../../../components/ButtonLabel";
import api from "../../../../api";
import { useState } from "react";
import Loading from "../../../../components/Loading";

const Form = () => {
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    setIsLoading(true);
    const { data } = await api.post("/users/login", formData);
    console.log(data);
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

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
              label={"E-mail"}
            />
            <S.SpanError className="email">{errors.email?.message}</S.SpanError>
          </S.GenericContainer>

          <S.GenericContainer>
            <InputLabel
              type="password"
              register={register}
              name={"password"}
              label={"Senha"}
            />
            <S.SpanError>{errors.password?.message}</S.SpanError>
            <S.RecoveryPassword to="/recoverypass">
              Esqueceu a senha?
            </S.RecoveryPassword>
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
