import { useFormik } from 'formik';
import { ValidationFormModerator } from '../../../../../../core/utils/helpers/validates/validation-form-moderator';

export const useFormModerator = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      surname: '',
      area: '',
      position: '',
      email: '',
      phone: '',
    },

    validationSchema: ValidationFormModerator,

    onSubmit: values => {
      console.log(values);
      formik.resetForm();
    },
  });

  return [formik];
};
