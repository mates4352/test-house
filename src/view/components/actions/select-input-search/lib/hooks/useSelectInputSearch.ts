import { ChangeEvent, useEffect, useState } from 'react';

export const useSelectInputSearch = (onCallback: (value: string) => void) => {
  const [inputValue, setInputValue] = useState<string>('');
  const onChangeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      onCallback(inputValue);
    }, 500);

    return () => clearTimeout(idTimeout);
  }, [inputValue]);

  return [inputValue, onChangeValueInput] as const;
};
