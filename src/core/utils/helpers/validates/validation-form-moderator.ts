import * as yup from 'yup';

export const ValidationFormModerator = yup.object().shape({
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

  position: yup
    .string()
    .required('Поле не заполнено')
    .max(30, 'Максимальное количество симоволо 30'),

  area: yup
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
});
