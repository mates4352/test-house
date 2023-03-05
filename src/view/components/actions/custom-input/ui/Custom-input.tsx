import React, { FC } from 'react';
import * as S from '../lib/styles/Custom-input-styles';
import { ErrorAnimation } from '../../../statics/error';
import { FieldInputProps, FieldMetaProps } from 'formik/dist/types';
import { useCustomInput } from '../lib/hooks/useCustomInput';

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
  const [focusInput, errorInput, validInput, onFocusInput] = useCustomInput(
    touched,
    error,
  );

  return (
    <S.Wrap>
      <S.CustomInput
        {...props}
        isActive={focusInput}
        isError={errorInput}
        isValid={validInput}
        onFocus={onFocusInput}
      />

      <ErrorAnimation
        isError={errorInput}
        margin={'4px 0 0'}>
        {error}
      </ErrorAnimation>
    </S.Wrap>
  );
};
