import { ChangeEvent, useRef } from 'react';
import { FormikHandlers } from 'formik/dist/types';

export const useChangeHeightTextarea = (
  change: FormikHandlers['handleChange'],
) => {
  const TextareaRef = useRef<any>(null);

  const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    TextareaRef.current.style.height = 0;
    TextareaRef.current.style.height = TextareaRef.current.scrollHeight + 'px';
    change && change(e);
  };

  return [TextareaRef, onChangeTextarea];
};
