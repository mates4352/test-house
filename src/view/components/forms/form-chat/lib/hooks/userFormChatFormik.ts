import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LinkMain } from '../../../../../../core/utils/enum/links/link-main';

export const useFormChatFormik = (onCallback: (value: string) => void) => {
  const formik = useFormik({
    initialValues: {
      message: '',
    },

    onSubmit: values => {
      if (values.message) {
        console.log(values);
        onCallback(values.message);
        formik.resetForm();
      }
    },
  });

  return [formik];
};
