import S from "./style";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import schema from "./validation";
import InputLabel from "../../../../components/InputLabel";
import api from "../../../../api";
import Loading from "../../../../components/Loading";
import useAuth from "../../../../hooks/useAuth";
import ButtonLabel from "../../../../components/ButtonLabel";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { salveUserInfo } = useAuth();

  const notify = () =>
    toast.error("Algum campo inválido", {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (formData) => {
    setIsLoading(true);

    try {
      await api.post("/users/create", formData);

      const { data } = await api.post("/users/login", {
        email: formData.email,
        password: formData.password,
      });

      salveUserInfo(data, data.token);

      return navigate("/");
    } catch (error) {
      notify();
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <ToastContainer />
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.GenericContainer>
          <InputLabel
            type="text"
            register={register}
            name={"name"}
            label={"Nome"}
          />
          <S.SpanError className="error">{errors.name?.message}</S.SpanError>
        </S.GenericContainer>

        <S.GenericContainer>
          <InputLabel
            type="email"
            register={register}
            name={"email"}
            label={"E-mail"}
          />
          <S.SpanError className="error">{errors.email?.message}</S.SpanError>
        </S.GenericContainer>

        <S.GenericContainer>
          <InputLabel
            type="password"
            register={register}
            name={"password"}
            label={"Senha"}
          />
          <S.SpanError className="error">{errors.password?.message}</S.SpanError>
        </S.GenericContainer>

        <ButtonLabel type="submit">Cadastrar</ButtonLabel>

        <S.CreateAccount>
          Já possui uma conta? <S.Span to="/login">Entre</S.Span>
        </S.CreateAccount>
      </S.Form>
    </S.Container>
  );
};

export default Form;
