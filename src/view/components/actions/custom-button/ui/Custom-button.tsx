import React, { FC } from 'react';
import * as S from '../lib/styles/Custom-button-styles';

type CustomButtonType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

export const CustomButton: FC<CustomButtonType> = ({ children, ...props }) => {
  return <S.CustomButton {...props}>{children}</S.CustomButton>;
};
