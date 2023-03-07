import * as yup from 'yup';

export const ValidationAppealSchema = yup.object().shape({
  subject: yup
    .string()
    .required('Поле не заполнено')
    .max(60, 'Максимальное количество симоволо 60'),
  appeal: yup
    .string()
    .required('Поле не заполнено')
    .max(800, 'Максимальное количество символов 60'),
});
