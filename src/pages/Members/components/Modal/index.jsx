import S from "./style";
import InputLabel from "../../../../components/InputLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import api from "../../../../api";

const Modal = ({ closeModal, setData, notify, token }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (formData) => {
    //setIsLoading(true);

    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await api.post("/admin/create", formData, config);

      const { name, email, picture, role, id } = data;
      setData((prev) => [...prev, { name, email, picture, role, id }]);
      notify("success", "Administrador criado com sucesso");
      return closeModal();
    } catch (error) {
      console.log(error);
      notify("error", "Ocorreu um error ao criar administrador");
    }
  };

  return (
    <>
      <S.Container>
        <S.Title>Adicionar novo administrador</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.WrapperGeneric>
            <InputLabel
              type="text"
              register={register}
              name={"name"}
              label={"Nome"}
            />
            <S.SpanError>{errors.name?.message}</S.SpanError>
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <InputLabel
              type="email"
              register={register}
              name={"email"}
              label={"Email"}
            />
            <S.SpanError>{errors.email?.message}</S.SpanError>
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <InputLabel
              type="password"
              register={register}
              name={"password"}
              label={"Senha"}
            />
            <S.SpanError>{errors.password?.message}</S.SpanError>
          </S.WrapperGeneric>

          <S.WrapperButton>
            <S.Button type="reset" onClick={closeModal}>
              Cancelar
            </S.Button>
            <S.Button type="submit">Criar</S.Button>
          </S.WrapperButton>
        </S.Form>
      </S.Container>
      <S.BG />
    </>
  );
};

export default Modal;
