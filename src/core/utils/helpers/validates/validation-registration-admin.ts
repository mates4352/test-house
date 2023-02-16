import * as yup from 'yup';

export const ValidationRegistrationAdminSchema = yup.object().shape({
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

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Min 8 characters')
    .max(20, 'Max 20 characters'),

  forgotPassword: yup
    .string()
    .required('Password is required')
    .min(8, 'Min 8 characters')
    .max(20, 'Max 20 characters')
    .oneOf([yup.ref('password')], 'Confirm password does not match'),

  phone: yup.string().required('Phone is required').min(16, 'No valid phone'),

  position: yup
    .string()
    .required('Password is required')
    .max(30, 'Max 30 characters'),

  area: yup
    .string()
    .required('Password is required')
    .max(30, 'Max 30 characters'),
});
