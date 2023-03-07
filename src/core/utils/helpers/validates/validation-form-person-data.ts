import * as yup from 'yup';

export const ValidationFormPersonData = yup.object().shape({
  firstName: yup
    .string()
    .required('Поле не заполнено')
    .max(30, 'Максимальное количество симоволо 30'),
  lastName: yup
    .string()
    .required('Поле не заполнено')
    .max(30, 'Максимальное количество симоволо 30'),

  surname: yup
    .string()
    .required('Поле не заполнено')
    .max(30, 'Максимальное количество симоволо 30'),

  street: yup
    .string()
    .required('Поле не заполнено')
    .max(30, 'Максимальное количество симоволо 30'),

  house: yup
    .string()
    .required('Поле не заполнено')
    .max(30, 'Максимальное количество симоволо 30'),

  apartment: yup
    .string()
    .required('Поле не заполнено')
    .max(30, 'Максимальное количество симоволо 30'),

  email: yup
    .string()
    .required('Поле не заполнено')
    .email('Не корректно введен емайл'),

  phone: yup
    .string()
    .required('Поле не заполнено')
    .min(16, 'Не корректно введен номер телефона'),

  car: yup
    .string()
    .required('Поле не заполнено')
    .max(30, 'Максимальное количество симоволо 30'),

  parking_space: yup
    .string()
    .required('Поле не заполнено')
    .max(30, 'Максимальное количество симоволо 30'),

  contacts: yup.array().of(yup.string().required('Contact is required')),
});
