import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LinkMain } from '../../../../../../core/utils/enum/links/link-main';

export const useFormChatFormik = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      message: '',
    },

    onSubmit: values => {
      console.log(values);
      formik.resetForm();
    },
  });

  return [formik];
};
