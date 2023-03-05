import React, { FC } from 'react';
import * as S from '../lib/styles/Custom-button-styles';

type CustomButtonType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  property?: 'common' | 'outlined';
};

export const CustomButton: FC<CustomButtonType> = ({
  children,
  property,
  ...props
}) => {
  return (
    <S.CustomButton
      {...props}
      property={property}>
      {children}
    </S.CustomButton>
  );
};
