import {ChangeEvent, useEffect, useState} from "react";

export const useDebounce = (value: string, delay: number, f: () => void) => {
  const [Value, setValue] = useState<string>(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        f()
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [Value]
  );

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  return [Value, onChangeInputValue] as const
}