import React, { FC, ReactNode } from 'react';
import * as S from '../lib/styles/Wrapper-input-label-styles';

type WrapperInputLabelType = {
  label: string;
  children: ReactNode;
};

export const WrapperInputLabel: FC<WrapperInputLabelType> = ({
  label,
  children,
  ...props
}) => {
  return (
    <S.WrapperInputLabel {...props}>
      <S.Label>{label}</S.Label>

      {children}
    </S.WrapperInputLabel>
  );
};
