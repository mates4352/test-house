import { useState } from 'react';

export const useCustomInput = (touched: boolean, error: string | undefined) => {
  const [isFocus, setFocus] = useState(false);
  const is = {
    focus: isFocus,
    error: touched && !!error,
    valid: touched && !error,
  };

  const onFocusInput = () => {};

  return [is.focus, is.error, is.valid, onFocusInput] as const;
};
