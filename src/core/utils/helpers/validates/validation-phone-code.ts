import * as yup from 'yup';

export const ValidationPhoneCodeSchema = yup.object().shape({
  code: yup
    .string()
    .required('Поле не заполнено')
    .min(6, 'Максимальное количество симоволо 6'),
});
