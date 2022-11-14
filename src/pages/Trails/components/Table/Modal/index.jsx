import S from "./style";
import InputLabel from "../../../../../components/InputLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import api from "../../../../../api";
import { useEffect } from "react";

const Modal = ({ closeModal, setData, notify, token, localTrail }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    setValue("name", localTrail.name);
    setValue("description", localTrail.description);
    setValue("icon", localTrail.icon);
    setValue("hours", localTrail.hours);
  });

  const onSubmit = async (formData) => {
    //setIsLoading(true);

    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await api.post("/trail/create", formData, config);

      const { name, description, hours, icon, id } = data;
      setData((prev) => [...prev, { name, description, hours, icon, id }]);
      notify("success", "Trilha adicionada com sucesso");
      return closeModal();
    } catch (error) {
      console.log(error);
      notify("error", "Ocorreu um error ao criar trilha");
    }
  };

  return (
    <>
      <S.Container>
        <S.Title>Editar ou excluir Trilha</S.Title>
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
              type="text"
              register={register}
              name={"description"}
              label={"Descrição"}
            />
            <S.SpanError>{errors.description?.message}</S.SpanError>
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <InputLabel
              type="number"
              register={register}
              name={"hours"}
              label={"Horas"}
            />
            <S.SpanError>{errors.hours?.message}</S.SpanError>
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <InputLabel
              type="text"
              register={register}
              name={"icon"}
              label={"Icone (URL)"}
            />
            <S.SpanError>{errors.icon?.message}</S.SpanError>
          </S.WrapperGeneric>

          <S.WrapperButton>
            <S.Button type="reset" onClick={closeModal}>
              Cancelar
            </S.Button>
            <S.Button type="button">Excluir</S.Button>
            <S.Button type="submit">Salvar</S.Button>
          </S.WrapperButton>
        </S.Form>
      </S.Container>
      <S.BG />
    </>
  );
};

export default Modal;
