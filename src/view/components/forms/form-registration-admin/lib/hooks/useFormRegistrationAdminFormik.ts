import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ValidationRegistrationAdminSchema } from '../../../../../../core/utils/helpers/validates/validation-registration-admin';
import { LinkAuth } from '../../../../../../core/utils/enum/links/link-auth';

export const useFormRegistrationAdminFormik = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      surname: '',
      email: '',
      password: '',
      forgotPassword: '',
      phone: '',
      position: '',
      area: '',
    },

    validationSchema: ValidationRegistrationAdminSchema,

    onSubmit: values => {
      console.log(values);
      formik.resetForm();
      navigate(LinkAuth.WELCOME);
    },
  });

  return [formik];
};
