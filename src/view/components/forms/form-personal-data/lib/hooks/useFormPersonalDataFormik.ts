import {useFormik} from "formik";
import {ValidationPersonalDataSchema} from "../../../../../../core/utils/helpers/validates/validation-personal-data";

export const useFormPersonalDataFormik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: 'Миксим',
      lastName: 'Красивый',
      surname: 'Николаевич',
      email: 'ddddd2005@mail.ru',
      phone: '+7-837-837-73-21',
      street: 'Морозовая',
      house: '1',
      apartment: '26',
      car: 'Лада',
      parkingSpace: 'a203',
    },

    validationSchema: ValidationPersonalDataSchema,

    onSubmit: values => {
      console.log(values)
      formik.resetForm();
    },
  });

  return [formik]
}