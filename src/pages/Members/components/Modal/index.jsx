import S from "./style";
import InputLabel from "../../../../components/InputLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  /* const onSubmit = async (formData) => {
    setIsLoading(true);

    try {
      await api.post("/users/create", formData);

       return navigate("/");
    } catch (error) {}
  }; */

  return (
    <>
      <S.Container>
        <S.Title>Adicionar novo administrador</S.Title>
        <form>
          <InputLabel
            type="text"
            register={register}
            name={"name"}
            label={"Nome"}
          />
        </form>
      </S.Container>
      <S.BG />
    </>
  );
};

export default Modal;
