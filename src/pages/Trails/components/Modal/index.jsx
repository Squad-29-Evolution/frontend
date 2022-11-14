import S from "./style";
import InputLabel from "../../../../components/InputLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import api from "../../../../api";
import LoadingSmall from "../../../../components/LoadingSmall";
import { useState } from "react";

const Modal = ({ closeModal, setData, notify, token }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (formData) => {
    setIsLoading(true);

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
      setIsLoading(false);
      notify("error", "Ocorreu um error ao criar trilha");
    }
  };

  return (
    <>
      <S.Container>
        <S.Title>Adicionar nova Trilha</S.Title>
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
                <S.Button type="submit">Criar</S.Button>
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
