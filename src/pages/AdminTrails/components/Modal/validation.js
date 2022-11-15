import * as yup from "yup";

const schema = yup
  .object({
    name: yup
      .string()
      .required("Esse campo é obrigatório")
      .min(2, "Mínimo de 2 caracteres")
      .max(15, "Tamanho máximo de 15 caracteres"),

    description: yup
      .string()
      .required("Esse campo é obrigatório")
      .min(5, "Mínimo de 5 caracteres")
      .max(150, "O tamanho máximo é 100 caracteres"),

    hours: yup
      .number()
      .positive("Valor inválido, digite um número inteiro")
      .required("Esse campo é obrigatório")
      .max(50, "Tamanho máximo de 50"),

    icon: yup
      .string()
      .required("Esse campo é obrigatório")
      .url("Informe uma url válida"),
  })
  .required();

export default schema;
