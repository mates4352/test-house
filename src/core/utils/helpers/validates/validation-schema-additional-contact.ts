import * as yup from 'yup';

export const ValidationAdditionalContactSchema = yup.object().shape({
  phone: yup
    .string()
    .required('Поле не заполнено')
    .min(16, 'Не корректно введен номер телефона'),
});
