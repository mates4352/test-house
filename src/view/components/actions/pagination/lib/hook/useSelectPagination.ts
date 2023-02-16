import { useState } from 'react';

export const useSelectPagination = (
  selectOptionValue: number, // Начальное значение при отображение select.
  arrayOptionSelect: number[], // Список опций для выбора кол-во чего либо.
  onCallbackSelect?: () => void, // Колбек при выборе option в select
) => {
  const [selectValue, setSelectValue] = useState<number>(selectOptionValue);
  const [arraySelect, setArraySelect] = useState(arrayOptionSelect);

  // Принимает значение option из select при нажатие на него
  // 1. Убераем из массива элемент с этим value, пушим в конец массива selectValue, сортируем, меняем состояния.
  const onChangeArraySelect = (value: number) => () => {
    const array = arraySelect.filter((el: any) => el !== value);
    array.push(selectValue);
    array.sort((a: number, b: number) => a - b);
    setSelectValue(value);
    setArraySelect(array);
    if (onCallbackSelect) onCallbackSelect();
  };

  return [selectValue, arraySelect, onChangeArraySelect] as const;
};
