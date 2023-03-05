import { ChangeEvent, useEffect, useState } from 'react';

export const useAddTitle = (onCallback: (value: string) => void) => {
  const [inputValue, setInputValue] = useState<string>('');
  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  useEffect(() => {
    const idTimeout = setTimeout(() => {
      onCallback(inputValue);
    }, 500);

    return () => clearTimeout(idTimeout);
  }, [inputValue]);

  return [inputValue, onChangeInputValue] as const;
};
