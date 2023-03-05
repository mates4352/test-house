import * as yup from 'yup';

export const ValidationFormModerator = yup.object().shape({
  firstName: yup
    .string()
    .required('FirstName is required')
    .max(30, 'Max 30 characters'),
  lastName: yup
    .string()
    .required('LastName is required')
    .max(30, 'Max 30 characters'),

  surname: yup
    .string()
    .required('Surname is required')
    .max(30, 'Max 30 characters'),

  position: yup
    .string()
    .required('Position is required')
    .max(30, 'Max 30 characters'),

  area: yup.string().required('Area is required').max(30, 'Max 30 characters'),

  email: yup.string().required('Email is required').email('Invalid email'),

  phone: yup.string().required('Phone is required').min(16, 'No valid phone'),
});
