import React, { FC, useState } from 'react';
import * as S from '../lib/styles/Input-checkbox-square-styles';

type InputCheckboxSquareType = {
  el: any;
  onCallBack: (text: string) => void;
};

export const InputCheckboxSquare: FC<InputCheckboxSquareType> = ({
  el,
  onCallBack,
  ...props
}) => {
  const onChangeChecked = (text: string) => () => {
    onCallBack(text);
  };
  return (
    <S.InputCheckboxSquare
      isChecked={el.checked}
      {...props}>
      <S.Label htmlFor={el.id}>{el.text}</S.Label>
      <S.InputCheckbox
        id={el.id}
        type={'checkbox'}
        defaultChecked={el.checked}
        onChange={onChangeChecked(el.text)}
      />
    </S.InputCheckboxSquare>
  );
};
