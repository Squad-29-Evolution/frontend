import * as yup from "yup";

const schema = yup
  .object({
    name: yup
      .string()
      .min(4, "Mínimo de 4 caracteres")
      .required("Esse campo é obrigatório"),
    email: yup
      .string()
      .email("Informe um e-mail válido")
      .required("Esse campo é obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .max(30, "Tamanho máximo da senha: 30")
      .required("Esse campo é obrigatório"),
  })
  .required();

export default schema;
