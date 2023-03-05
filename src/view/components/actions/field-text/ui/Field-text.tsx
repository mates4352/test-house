import React, { FC } from 'react';
import * as S from '../lib/styles/Field-text-styles';
import { FieldInputProps, FieldMetaProps } from 'formik/dist/types';
import { useChangeHeightTextarea } from '../lib/hooks/useChangeHeightTextarea';
import { ErrorAnimation } from '../../../statics/error';

type FieldtextType = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  FieldMetaProps<any> &
  FieldInputProps<any> & {};

export const FieldText: FC<FieldtextType> = ({
  onChange,
  touched,
  value,
  error,
  ...props
}) => {
  const [
    focusTextarea,
    errorTextarea,
    validTextarea,
    textareaRef,
    onChangeTextarea,
    onFocusTextarea,
  ] = useChangeHeightTextarea(touched, error, value, onChange);

  return (
    <S.Wrap>
      <S.Textarea
        {...props}
        isActive={focusTextarea}
        isError={errorTextarea}
        isValid={validTextarea}
        ref={textareaRef}
        onChange={onChangeTextarea}
        onFocus={onFocusTextarea}
        value={value}
      />

      <ErrorAnimation
        isError={errorTextarea}
        margin={'4px 0 0'}>
        {error}
      </ErrorAnimation>
    </S.Wrap>
  );
};
