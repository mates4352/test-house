import React, {FC, useState} from 'react';
import * as S from "../lib/styles/Pagination-styles";
import {SelectOptions} from "../../select-options";

type PaginationType = {
  arrayOptionSelect: Array<number>
  selectOptionValue: number
  onCallbackSelect?: () => void
  currentPage: number
  pageCount: number // для select
  maxPageNumber: number
  pageCurrentCount: number
};

export const Pagination: FC<PaginationType> = ({
  arrayOptionSelect,
  selectOptionValue,
  onCallbackSelect,
  currentPage,
  pageCount,
  pageCurrentCount,
  maxPageNumber,
  ...props
}) => {
  const [maxNumber, setMaxNumber] = useState<number>(maxPageNumber)
  const [selectValue, setSelectValue] = useState<number>(selectOptionValue)
  const [arraySelect, setArraySelect] = useState(arrayOptionSelect)
  const arrayButton: number[] = []
  const maxNumberCount = Math.ceil(pageCurrentCount / pageCount)

  const onChangeArraySelect = (value: number) => () => {
    const array = arraySelect.filter(el => el !== value)
    array.push(selectValue)
    array.sort((a: number, b: number) => a - b)
    setSelectValue(value)
    setArraySelect(array)
    if(onCallbackSelect) onCallbackSelect()
  }

  if(maxNumberCount > 5 && maxNumberCount) {
    for(let i = maxNumber - 4, j = 0; i <= maxNumber; i++, j++) {
      arrayButton[j] = i
    }
  } else {
    for(let i = 1; i <= maxNumberCount; i++) {
      arrayButton[i] = i
    }
  }

  return (
    <S.Pagination {...props}>
      <S.Wrap>

        <S.PaginationButtonPrev disabled={maxNumber <= 5} onClick={() => {
          setMaxNumber((value: number) => value -= 1)
        }}>
          Prev
        </S.PaginationButtonPrev>

        {maxNumber >= 10 &&
            <>
                <S.PaginationButton onClick={() => setMaxNumber((value: number) => value -= 5)}>
                  {maxNumber + -5}
                </S.PaginationButton>
                ...
            </>

        }

        <S.List>
          {arrayButton.map(button =>
            <S.Item key={button}>
              <S.PaginationButton currentPage={currentPage === button}>
                {button}
              </S.PaginationButton>
            </S.Item>
          )}
        </S.List>

        {(maxNumberCount > 5 && !(maxNumberCount <= arrayButton[arrayButton.length - 1] + 5)) &&
            <>
                ...
                <S.PaginationButton onClick={() => setMaxNumber((value: number) => value += 5)}>
                  {maxNumber + 1}
                </S.PaginationButton>
            </>
        }

        <S.PaginationButtonNext disabled={maxNumberCount <= 5 || maxNumberCount <= arrayButton[arrayButton.length - 1]}
                                onClick={() => {
                                  setMaxNumber((value: number) => value += 1)
                                }}>
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
