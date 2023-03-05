import { ChangeEvent, useEffect, useRef, useState } from 'react';

export const useAddText = (onCallback: (value: string) => void) => {
  const textareaRef = useRef<any>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.currentTarget.value);
    textareaRef.current.style.height = 0;
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
  };

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      onCallback(inputValue);
    }, 500);

    return () => clearTimeout(idTimeout);
  }, [inputValue]);

  return [inputValue, textareaRef, onChangeTextarea] as const;
};
