import * as yup from 'yup';

export const ValidationAppealSchema = yup.object().shape({
  appeal: yup
    .string()
    .required('Password is required')
    .max(800, 'Max 800 characters'),
});
