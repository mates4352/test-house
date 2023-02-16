import { useFormik } from 'formik';
import { ValidationPhoneCodeSchema } from '../../../../../../core/utils/helpers/validates/validation-phone-code';
import { useNavigate } from 'react-router-dom';
import { LinkMain } from '../../../../../../core/utils/enum/links/link-main';

export const useFormPhoneCodeFormik = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      code: '',
    },

    validationSchema: ValidationPhoneCodeSchema,

    onSubmit: values => {
      console.log(values);
      formik.resetForm();
      navigate(LinkMain.Home);
    },
  });

  return [formik];
};
