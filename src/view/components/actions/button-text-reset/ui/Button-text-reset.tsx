import React, { FC } from 'react';
import * as S from '../lib/styles/Button-text-reset-styles';

type ButtonTextResetType = {
  children: string;
  onCallback: () => void;
};

export const ButtonTextReset: FC<ButtonTextResetType> = ({
  children,
  onCallback,
  ...props
}) => {
  return (
    <S.ButtonTextReset
      type={'button'}
      onClick={onCallback}
      {...props}>
      {children}
    </S.ButtonTextReset>
  );
};
