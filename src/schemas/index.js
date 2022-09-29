import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().min(3, "Name is too short!").required("Name is required!"),
  email: yup
    .string()
    .email("Email is not valid!")
    .required("Email is required!"),
  message: yup
    .string()
    .min(3, "Message is too short!")
    .required("Message is required!"),
});
