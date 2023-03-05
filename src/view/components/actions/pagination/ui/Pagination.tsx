import React, { FC } from 'react';
import * as S from '../lib/styles/Pagination-styles';
import { SelectOptions } from '../../select-options';
import { usePagination } from '../lib/hook/usePagination';
import { Point } from '../lib/styles/Pagination-styles';

type PaginationType = {
  maxPageNumber: number; // Максимльное кол-во кнопок в pagination.
  selectOptionValue: number; // Начальное значение при отображение select.
  arrayOptionSelect: Array<number>; // Список опций для выбора кол-во чего либо.
  pageCurrentCount: number; // Общеее кол-во элементов массива.
  currentPage: number; // Текущая страница
  pageCount: number; // Кол-во отображаемых элементов на странице связано с select
  onCallbackSelect?: () => void; // Колбек при выборе option в select
  onClickPaginationButton?: (value: number) => void;
};

export const Pagination: FC<PaginationType> = ({
  arrayOptionSelect,
  selectOptionValue,
  currentPage,
  pageCount,
  pageCurrentCount,
  maxPageNumber,
  onCallbackSelect,
  onClickPaginationButton,
  ...props
}) => {
  const [
    maxNumber,
    arrayButton,
    maxNumberCount,
    valuePaginationButtonPrevPages,
    valuePaginationButtonNextPages,
    disabledButtonPrevNext,
    onChangePage,
    onBackPages,
    onNextPages,
    arraySelect,
    selectValue,
    onChangeArraySelect,
    onChangeCurrentPage,
  ] = usePagination(
    maxPageNumber,
    selectOptionValue,
    arrayOptionSelect,
    pageCurrentCount,
    pageCount,
    onCallbackSelect,
    onClickPaginationButton,
  );

  return (
    <S.Pagination {...props}>
      <S.Wrap>
        <S.PaginationButtonPrev
          disabled={disabledButtonPrevNext('prev')}
          onClick={onChangePage('-', 1)}>
          <S.IconArrowPrev />
        </S.PaginationButtonPrev>

        <S.PaginationButton
          onClick={onBackPages}
          disabled={maxNumber === maxPageNumber}
          margin={'0 4px'}>
          {valuePaginationButtonPrevPages}
        </S.PaginationButton>

        <Point>...</Point>

        <S.List>
          {arrayButton.map(button => (
            <S.Item key={button}>
              <S.PaginationButton
                currentPage={currentPage === button}
                onClick={onChangeCurrentPage(button)}>
                {button}
              </S.PaginationButton>
            </S.Item>
          ))}
        </S.List>

        <Point>...</Point>

        <S.PaginationButton
          onClick={onNextPages}
          disabled={maxNumber === maxNumberCount}
          margin={'0 4px'}>
          {valuePaginationButtonNextPages}
        </S.PaginationButton>

        <S.PaginationButtonNext
          disabled={disabledButtonPrevNext()}
          onClick={onChangePage('+', 1)}>
          <S.IconArrowNext />
        </S.PaginationButtonNext>
      </S.Wrap>

      <SelectOptions
        selectValue={selectValue}
        arrayOptions={arraySelect}
        onChooseOption={onChangeArraySelect}
      />
    </S.Pagination>
  );
};
