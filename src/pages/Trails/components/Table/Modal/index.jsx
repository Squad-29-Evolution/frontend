import S from "./style";
import InputLabel from "../../../../../components/InputLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import api from "../../../../../api";
import { useEffect, useState } from "react";
import LoadingSmall from "../../../../../components/LoadingSmall";

const Modal = ({ closeModal, setData, notify, token, localTrail }) => {
  const [isLoading, setIsLoading] = useState(false);

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

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const onSubmit = async (formData) => {
    setIsLoading(true);

    try {
      const { data } = await api.put(
        `/trail/${localTrail.id}`,
        formData,
        config,
      );

      const { description, hours, icon, id, name } = data;
      setData((prev) => {
        const newData = prev.filter((trail) => trail.id != id);
        return [...newData, { description, hours, icon, id, name }];
      });
      notify("success", "Trilha atualizada com sucesso");
      return closeModal();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      notify("error", "Ocorreu um error ao criar trilha");
    }
  };

  const deleteTrail = async () => {
    setIsLoading(true);
    try {
      await api.delete(`/trail/${localTrail.id}`, config);

      setData((prev) => {
        const newData = prev.filter((trail) => trail.id != localTrail.id);
        return newData;
      });

      notify("success", `A trilha ${localTrail.name} atualizada foi excluida`);
      return closeModal();
    } catch (error) {
      setIsLoading(false);
      notify(
        "error",
        "Ocorreu um error ao excluir trilha (A trilha tem conteudos)",
      );
    }
  };

  return (
    <>
      <S.Container>
        <S.Title>Editar ou Excluir Trilha</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          {isLoading ? (
            <LoadingSmall />
          ) : (
            <>
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
                <S.Button type="button" onClick={deleteTrail}>
                  Excluir
                </S.Button>
                <S.Button type="submit">Salvar</S.Button>
              </S.WrapperButton>
            </>
          )}
        </S.Form>
      </S.Container>
      <S.BG />
    </>
  );
};

export default Modal;
