import React, { FC } from 'react';
import * as S from '../lib/styles/Custom-input-styles';
import { ErrorAnimation } from '../../../statics/error';
import { FieldInputProps, FieldMetaProps } from 'formik/dist/types';

export type CustomInputType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  FieldMetaProps<any> &
  FieldInputProps<any> & {};

export const CustomInput: FC<CustomInputType> = ({
  touched,
  error,
  ...props
}) => {
  const isError = touched && !!error;
  const isValid = touched && !error;

  return (
    <S.Wrap>
      <S.CustomInput
        {...props}
        isError={isError}
        isValid={isValid}
      />

      <ErrorAnimation isError={isError}>{error}</ErrorAnimation>
    </S.Wrap>
  );
};
