import React, { FC, useState } from 'react';
import * as S from '../lib/styles/Select-options-styles';
import { useOnClickOutside } from '../../../../../core/utils/hooks/useOnClickOutside';
import { IconArrow } from '../../../icons/Icon-arrow';

type SelectOptionsType = {
  arrayOptions: number[];
  onChooseOption: (value: number) => () => void;
  selectValue: number;
};

export const SelectOptions: FC<SelectOptionsType> = ({
  selectValue,
  arrayOptions,
  onChooseOption,
  ...props
}) => {
  const [isSelect, setSelect] = useState<boolean>(false);
  const [ref] = useOnClickOutside(() => setSelect(false));
  const onOpenSelect = () => {
    setSelect(value => !value);
  };

  return (
    <S.SelectOptions
      {...props}
      ref={ref}>
      <S.SelectButtonOpen
        type={'button'}
        onClick={onOpenSelect}
        statusOpen={isSelect}>
        {selectValue}
        <S.Arrow />
      </S.SelectButtonOpen>

      {isSelect && (
        <S.Select>
          {arrayOptions.map((el: number, index: number) => (
            <S.SelectItem key={index}>
              <S.SelectButton
                type={'button'}
                onClick={onChooseOption(el)}>
                {el}
                <S.Check />
              </S.SelectButton>
            </S.SelectItem>
          ))}
        </S.Select>
      )}
    </S.SelectOptions>
  );
};
