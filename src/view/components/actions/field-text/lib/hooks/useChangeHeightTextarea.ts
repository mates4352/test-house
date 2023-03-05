import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { FormikHandlers } from 'formik/dist/types';

export const useChangeHeightTextarea = (
  touched: boolean,
  error: string | undefined,
  value: string,
  change: FormikHandlers['handleChange'],
) => {
  const [isFocus, setFocus] = useState(false);
  const TextareaRef = useRef<any>(null);

  const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    TextareaRef.current.style.height = 0;
    TextareaRef.current.style.height = TextareaRef.current.scrollHeight + 'px';
    change && change(e);
  };

  const is = {
    focus: isFocus,
    error: touched && !!error,
    valid: touched && !error,
  };

  const onFocusTextarea = () => {};

  return [
    is.focus,
    is.error,
    is.valid,
    TextareaRef,
    onChangeTextarea,
    onFocusTextarea,
  ] as const;
};
