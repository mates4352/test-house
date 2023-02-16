import { useFormik } from 'formik';
import { ValidationSigInSchema } from '../../../../../../core/utils/helpers/validates/validation-schema-sig-in';
import { useNavigate } from 'react-router-dom';
import { LinkAuth } from '../../../../../../core/utils/enum/links/link-auth';

export const useFormSigInFormik = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      phone: '',
    },

    validationSchema: ValidationSigInSchema,

    onSubmit: values => {
      console.log(values);
      formik.resetForm();
      navigate(LinkAuth.PHONE_CODE);
    },
  });

  return [formik];
};
