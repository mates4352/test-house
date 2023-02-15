import React, {FC} from 'react';
import * as S from "../lib/styles/Pagination-styles";
import {SelectOptions} from "../../select-options";
import {usePagination} from "../lib/hook/usePagination";
import {AnimationShow} from "../../../animation/AnimationShow";

type PaginationType = {
  maxPageNumber: number // Максимльное кол-во кнопок в pagination.
  selectOptionValue: number // Начальное значение при отображение select.
  arrayOptionSelect: Array<number> // Список опций для выбора кол-во чего либо.
  pageCurrentCount: number // Общеее кол-во элементов массива.
  currentPage: number // Текущая страница
  pageCount: number // Кол-во отображаемых элементов на странице связано с select
  onCallbackSelect?: () => void // Колбек при выборе option в select
  onClickPaginationButton?: (value: number) => void
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
    disabledButtonPrevNext,
    onChangeMaxNumber,
    isPaginationButton,
    arraySelect,
    selectValue,
    onChangeArraySelect,
    onChangeCurrentPage
  ] = usePagination(
    maxPageNumber,
    selectOptionValue,
    arrayOptionSelect,
    pageCurrentCount,
    pageCount,
    onCallbackSelect,
    onClickPaginationButton,
  )

  const AnimationOption = {
    initial: {width: 0, scale: '0', opacity: 0},
    animate: {width: 'auto', scale: '1', opacity: 1},
    exit: {width: 0, scale: '0', opacity: 0},
  }

  return (
    <S.Pagination {...props}>
      <S.Wrap>
        <S.PaginationButtonPrev
          disabled={disabledButtonPrevNext("prev")}
          onClick={onChangeMaxNumber('-', 1)}>
          Prev
        </S.PaginationButtonPrev>

        <AnimationShow isAnimation={isPaginationButton('-')} variants={AnimationOption}>
          <S.PaginationButton onClick={onChangeMaxNumber('-', maxPageNumber)}>
            {maxNumber + -maxPageNumber}
          </S.PaginationButton>
        </AnimationShow>

        <S.List>
          {arrayButton.map(button =>
            <S.Item key={button}>
              <S.PaginationButton currentPage={currentPage === button} onClick={onChangeCurrentPage(button)}>
                {button}
              </S.PaginationButton>
            </S.Item>
          )}
        </S.List>

        <AnimationShow isAnimation={isPaginationButton('+')} variants={AnimationOption}>
          <S.PaginationButton onClick={onChangeMaxNumber('+', maxPageNumber)}>
            {maxNumber + maxPageNumber}
          </S.PaginationButton>
        </AnimationShow>

        <S.PaginationButtonNext
          disabled={disabledButtonPrevNext()}
          onClick={onChangeMaxNumber('+', 1)}>
          Prev
        </S.PaginationButtonNext>
      </S.Wrap>

      <SelectOptions
        selectValue={selectValue}
        arrayOptions={arraySelect}
        onChooseOption={onChangeArraySelect}/>
    </S.Pagination>
  );
};
