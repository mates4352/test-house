import { useState } from 'react';
import { useSelectPagination } from './useSelectPagination';

type signType = '+' | '-';

export const usePagination = (
  maxPageNumber: number, // Максимльное кол-во кнопок в pagination.
  selectOptionValue: number, // Начальное значение при отображение select.
  arrayOptionSelect: number[], // Список опций для выбора кол-во чего либо.
  pageCurrentCount: number, // Общеее кол-во элементов массива.
  pageCount: number, // Кол-во отображаемых элементов на странице связано с select
  onCallbackSelect?: () => void, // Колбек при выборе option в select
  onClickPaginationButton?: (value: number) => void, // Кобек для массива кнопок
) => {
  const [selectValue, arraySelect, onChangeArraySelect] = useSelectPagination(
    selectOptionValue,
    arrayOptionSelect,
    onCallbackSelect,
  );
  const [maxNumber, setMaxNumber] = useState<number>(maxPageNumber);
  const arrayButton: number[] = [];
  const maxNumberCount = Math.ceil(pageCurrentCount / pageCount); // Находим макс кол-во возможных элементов(кнопок).

  if (maxNumberCount > maxPageNumber) {
    // Каждый раз как прибавляем в maxNumber + 5 через ButtonPagination
    for (
      let i = 0, j = maxNumber - (maxPageNumber - 1);
      j <= maxNumber;
      i++, j++
    ) {
      arrayButton[i] = j;
    }
  } else {
    for (let i = 1; i <= maxNumberCount; i++) {
      arrayButton[i] = i;
    }
  }

  const disabledButtonPrevNext = (value?: 'prev') => {
    if (value === 'prev') {
      return maxNumber <= maxPageNumber;
    } else {
      return maxNumberCount <= arrayButton[arrayButton.length - 1];
    }
  };

  const isPaginationButton = (sign: signType) => {
    const calc = {
      '+': !(
        maxNumberCount <=
        arrayButton[arrayButton.length - 1] + maxPageNumber
      ),
      '-': maxNumber >= maxPageNumber * 2,
    };

    return calc[sign];
  };

  const onChangeMaxNumber = (sign: signType, number: number) => () => {
    const calc = {
      '+': (value: number) => (value += number),
      '-': (value: number) => (value -= number),
    };

    setMaxNumber(calc[sign]);
  };

  const onChangeCurrentPage = (value: number) => () => {
    onClickPaginationButton && onClickPaginationButton(value);
  };

  return [
    maxNumber,
    arrayButton,
    disabledButtonPrevNext,
    onChangeMaxNumber,
    isPaginationButton,
    arraySelect,
    selectValue,
    onChangeArraySelect,
    onChangeCurrentPage,
  ] as const;
};
