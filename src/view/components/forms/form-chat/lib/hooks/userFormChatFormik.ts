import { useFormik } from 'formik';
import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { useAddFileImage } from '../../../../../../core/utils/hooks/useAddFileImage';

export const useFormChatFormik = (
  onCallback: (value: string, image?: string) => void,
) => {
  const [isButton, setButton] = useState(false);
  const ref = useRef<any>(null);

  const addImageMessage = (image?: string) => {
    onCallback('', String(image));
  };

  const [image, addFileImage] = useAddFileImage('', addImageMessage);

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

    if (!e.currentTarget.value) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      formik.submitForm();
    }
  };

  const AnimationShowButton = {
    initial: { width: 0, opacity: 0, overflow: 'hidden' },
    animate: { width: 'auto', opacity: 1 },
    exit: { width: 0, opacity: 0 },
  };

  return [
    formik,
    ref,
    isButton,
    image,
    addFileImage,
    AnimationShowButton,
    onChangeTextarea,
    onKeyDown,
  ] as const;
};
