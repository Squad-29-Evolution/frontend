import S from "./style";
import InputLabel from "../../../../../components/InputLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import api from "../../../../../api";
import { useState, useEffect } from "react";
import SelectBox from "../../../../../components/SelectBox";
import LoadingSmall from "../../../../../components/LoadingSmall";

// eslint-disable-next-line no-unused-vars
const Modal = ({ closeModal, setData, notify, token, localContent }) => {
  const [categoryIsOpen, setCategoryIsOpen] = useState(false);
  const [categoryLabel, setCategoryLabel] = useState("Selecione uma categoria");
  const [trailIsOpen, setTrailIsOpen] = useState(false);
  const [trailLabel, setTrailLabel] = useState("Selecione uma trilha");
  const [categorysData, setCategoryData] = useState([]);
  const [trailsData, setTrailData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const ToggleActiveCategory = () => {
    console.log("abriu");
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
    setIsLoading(true);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const [categorys, trails] = await Promise.all([
      getAllCategorys(config),
      getAllTrails(config),
    ]);
    setCategoryData(categorys);
    setTrailData(trails);
    return setIsLoading(false);
  };

  useEffect(() => {
    getAllFetch();
    const { title, description, link } = localContent;
    setValue("title", title);
    setValue("description", description);
    setValue("link", link);
  }, []);

  const onSubmit = async (formData) => {
    setIsLoading(true);
    console.log(errors);

    const trail_id = parseInt(formData.trail);
    const category_id = parseInt(formData.category);

    const newData = { ...formData, trail_id, category_id, type: "link" };
    console.log("nova :", newData);
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await api.put(
        `/contents/${localContent.id}`,
        newData,
        config,
      );

      setData((prev) => {
        const newData = prev.filter((trail) => trail.id != localContent.id);
        return [...newData, { ...data }];
      });
      notify("success", "Conteudo adicionada com sucesso");

      return closeModal();
    } catch (error) {
      console.log(error);
      notify("error", "Ocorreu um error ao criar conteudo");
      setIsLoading(false);
    }
  };

  const deleteTrail = async () => {
    setIsLoading(true);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      await api.delete(`contents/${localContent.id}`, config);
      notify("success", "Conteudo atualizado com sucesso");

      setData((prev) => {
        const newData = prev.filter((content) => content.id != localContent.id);
        return newData;
      });
      return closeModal();
    } catch (error) {
      notify("error", "Ocorreu um error ao excluir conteúdo");
      setIsLoading(false);
    }
  };

  return (
    <>
      <S.Container>
        <S.Title>Editar ou Excluir Conteúdo</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          {isLoading ? (
            <LoadingSmall />
          ) : (
            <>
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
