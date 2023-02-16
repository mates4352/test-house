import { useFormik } from 'formik';
import { ValidationAppealSchema } from '../../../../../../core/utils/helpers/validates/validation-appeal-schema';

export const useFormAppealFormik = () => {
  const formik = useFormik({
    initialValues: {
      subject: '',
      appeal: '',
    },

    validationSchema: ValidationAppealSchema,

    onSubmit: values => {
      console.log(values);
      formik.resetForm();
    },
  });

  return [formik];
};
