import * as yup from "yup";

const schema = yup
  .object({
    title: yup
      .string()
      .required("Esse campo é obrigatório")
      .min(2, "Mínimo de 2 caracteres")
      .max(100, "Tamanho máximo de 100 caracteres"),

    description: yup
      .string()
      .required("Esse campo é obrigatório")
      .min(5, "Mínimo de 5 caracteres")
      .max(1000, "O tamanho máximo é 1000 caracteres"),

    link: yup
      .string()
      .required("Esse campo é obrigatório")
      .url("Informe uma url válida"),

    category: yup.string().required("Esse campo é obrigatório"),
  })
  .required();

export default schema;
