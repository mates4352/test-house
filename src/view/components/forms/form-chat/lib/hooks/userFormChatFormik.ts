import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LinkMain } from '../../../../../../core/utils/enum/links/link-main';
import { ChangeEvent, useRef } from 'react';

export const useFormChatFormik = (onCallback: (value: string) => void) => {
  const ref = useRef<any>(null);

  const formik = useFormik({
    initialValues: {
      message: '',
    },

    onSubmit: values => {
      if (values.message) {
        console.log(values);
        onCallback(values.message);
        formik.resetForm();
        ref.current.style.height = 0;
      }
    },
  });

  const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    ref.current.style.height = 0;
    ref.current.style.height = ref.current.scrollHeight + 'px';
    formik.handleChange(e);
  };

  return [formik, ref, onChangeTextarea] as const;
};
