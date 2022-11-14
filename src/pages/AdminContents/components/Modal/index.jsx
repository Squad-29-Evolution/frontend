import S from "./style";
import InputLabel from "../../../../components/InputLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import api from "../../../../api";
import { useState, useEffect } from "react";
import SelectBox from "../../../../components/SelectBox";

// eslint-disable-next-line no-unused-vars
const Modal = ({ closeModal, setData, notify, token }) => {
  const [categoryIsOpen, setCategoryIsOpen] = useState(false);
  const [categoryLabel, setCategoryLabel] = useState("Selecione uma categoria");
  const [trailIsOpen, setTrailIsOpen] = useState(false);
  const [trailLabel, setTrailLabel] = useState("Selecione uma trilha");
  const [categorysData, setCategoryData] = useState([]);
  const [trailsData, setTrailData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const ToggleActiveCategory = () => {
    setCategoryIsOpen((prev) => !prev);
  };

  const ToggleActiveTrail = () => {
    setTrailIsOpen((prev) => !prev);
  };

  const getAllCategorys = async (config) => {
    const { data } = await api.get("/category", config);
    return data;
  };

  const getAllTrails = async (config) => {
    const { data } = await api.get("/trail", config);
    return data;
  };

  const getAllFetch = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const [categorys, trails] = await Promise.all([
      getAllCategorys(config),
      getAllTrails(config),
    ]);
    setCategoryData(categorys);
    setTrailData(trails);
  };

  useEffect(() => {
    getAllFetch();
  }, []);

  const onSubmit = async (formData) => {
    //setIsLoading(true);
    console.log(errors);

    console.log(formData);
    /* try {
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
    } */
  };

  return (
    <>
      <S.Container>
        <S.Title>Adicionar novo conteúdo</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.WrapperGeneric>
            <InputLabel
              type="text"
              register={register}
              name={"title"}
              label={"Nome"}
            />
            <S.SpanError>{errors.title?.message}</S.SpanError>
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <S.Label>Descrição</S.Label>
            <S.Description
              placeholder="Descrição do conteúdo"
              name="description"
              {...register("description")}
            />
            <S.SpanError>{errors.description?.message}</S.SpanError>
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <InputLabel
              type="text"
              register={register}
              name={"link"}
              label={"Link do conteúdo (URL)"}
            />
            <S.SpanError>{errors.link?.message}</S.SpanError>
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <S.Label>Categorias:</S.Label>

            <SelectBox
              Label={categoryLabel}
              setLabel={setCategoryLabel}
              isActive={categoryIsOpen}
              register={register}
              name="category"
              toggleActive={ToggleActiveCategory}
              data={categorysData}
            />

            <S.SpanError>{errors.category?.message}</S.SpanError>
          </S.WrapperGeneric>

          <S.WrapperGeneric>
            <S.Label>Trilhas:</S.Label>

            <SelectBox
              Label={trailLabel}
              setLabel={setTrailLabel}
              isActive={trailIsOpen}
              register={register}
              name="trail"
              toggleActive={ToggleActiveTrail}
              data={trailsData}
            />

            <S.SpanError>{errors.category?.message}</S.SpanError>
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
