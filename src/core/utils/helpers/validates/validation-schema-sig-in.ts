import * as yup from "yup";

export const ValidationSigInSchema = yup.object().shape({
  phone: yup.string()
  .required('Phone is required')
  .min(16, 'No valid phone'),
});