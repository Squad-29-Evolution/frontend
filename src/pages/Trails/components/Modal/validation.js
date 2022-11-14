import * as yup from "yup";

const schema = yup
  .object({
    name: yup
      .string()
      .required("Esse campo é obrigatório")
      .min(2, "Mínimo de 2 caracteres")
      .max(10, "Tamanho máximo de 10 caracteres"),

    description: yup
      .string()
      .required("Esse campo é obrigatório")
      .min(5, "Mínimo de 5 caracteres")
      .max(150, "O tamanho máximo é 100 caracteres"),

    hours: yup
      .number()
      .required("Esse campo é obrigatório")
      .max(5, "Tamanho máximo de 5"),

    icon: yup
      .string()
      .required("Esse campo é obrigatório")
      .url("Informe uma url válida"),
  })
  .required();

export default schema;
