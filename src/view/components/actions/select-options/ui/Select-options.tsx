import React, {FC, useState} from 'react';
import * as S from "../lib/styles/Select-options-styles";

type SelectOptionsType = {
  arrayOptions: any
  onChooseOption: (value: number) => () => void
  selectValue: number
};

export const SelectOptions: FC<SelectOptionsType> = ({
  selectValue,
  arrayOptions,
  onChooseOption,
  ...props
}) => {
  const [isSelect, setSelect] = useState<boolean>(false)
  const onOpenSelect = () => {
    setSelect(value => !value)
  }

  return (
    <S.SelectOptions {...props}>
      <S.SelectButtonOpen type={'button'} onClick={onOpenSelect}>
        {selectValue}
      </S.SelectButtonOpen>

      {isSelect &&
          <S.Select>
            {arrayOptions.map((el: any, index: number) =>
              <S.SelectItem key={index}>
                <S.SelectButton type={'button'} onClick={onChooseOption(el)}>
                  {el}
                </S.SelectButton>
              </S.SelectItem>
            )}
          </S.Select>
      }
    </S.SelectOptions>
  );
};
