import { useFormik } from 'formik';
import { ValidationFormPersonData } from '../../../../../../core/utils/helpers/validates/validation-form-person-data';

export const useFormPersonData = () => {
  const array = ['', '', ''];

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      surname: '',
      street: '',
      house: '',
      apartment: '',
      email: '',
      phone: '',
      car: '',
      parking_space: '',
      contacts: array,
    },

    validationSchema: ValidationFormPersonData,

    onSubmit: values => {
      console.log(values);
      formik.resetForm();
    },
  });

  return [formik];
};
