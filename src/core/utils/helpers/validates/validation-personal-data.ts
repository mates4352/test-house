import * as yup from 'yup';

export const ValidationPersonalDataSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('Password is required')
    .max(30, 'Max 30 characters'),

  lastName: yup
    .string()
    .required('Password is required')
    .max(30, 'Max 30 characters'),

  surname: yup
    .string()
    .required('Password is required')
    .max(30, 'Max 30 characters'),

  email: yup.string().required('Password is required').email('Invalid email'),

  phone: yup.string().required('Phone is required').min(16, 'No valid phone'),

  street: yup.string().required('Password is required'),

  house: yup.string().required('Password is required'),

  apartment: yup.string().required('Password is required'),

  car: yup.string().required('Password is required'),

  parkingSpace: yup.string().required('Password is required'),
});
