import * as yup from 'yup';

export const ValidationAppealSchema = yup.object().shape({
  subject: yup
    .string()
    .required('Password is required')
    .max(60, 'Max 60 characters'),
  appeal: yup
    .string()
    .required('Password is required')
    .max(800, 'Max 800 characters'),
});
