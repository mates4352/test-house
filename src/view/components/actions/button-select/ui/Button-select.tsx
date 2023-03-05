import React, { FC } from 'react';
import * as S from '../lib/styles/Button-select-styles';

type ButtonSelectType = {
  children: string;
  isActive: boolean;
  onCallback?: () => void;
};

export const ButtonSelect: FC<ButtonSelectType> = ({
  children,
  isActive,
  onCallback,
  ...props
}) => {
  return (
    <S.ButtonSelect
      isActive={isActive}
      onClick={onCallback}
      {...props}>
      {children} <S.Arrow />
    </S.ButtonSelect>
  );
};
