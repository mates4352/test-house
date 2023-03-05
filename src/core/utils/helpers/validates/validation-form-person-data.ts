import * as yup from 'yup';

export const ValidationFormPersonData = yup.object().shape({
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

  street: yup
    .string()
    .required('Area is required')
    .max(30, 'Max 30 characters'),

  house: yup
    .string()
    .required('House is required')
    .max(30, 'Max 30 characters'),

  apartment: yup
    .string()
    .required('apartment is required')
    .max(30, 'Max 30 characters'),

  email: yup.string().required('Email is required').email('Invalid email'),

  phone: yup.string().required('Phone is required').min(16, 'No valid phone'),

  car: yup.string().required('Car is required').max(30, 'Max 30 characters'),

  parking_space: yup
    .string()
    .required('Parking space is required')
    .max(30, 'Max 30 characters'),

  contacts: yup.array().of(yup.string().required('Contact is required')),
});
