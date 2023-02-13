import React, {FC} from 'react';
import * as S from "../lib/styles/Field-text-styles";
import {FieldInputProps, FieldMetaProps} from "formik/dist/types";
import {useChangeHeightTextarea} from "../lib/hooks/useChangeHeightTextarea";
import {ErrorAnimation} from "../../../statics/error";

type FieldtextType =
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
  & FieldMetaProps<any>
  & FieldInputProps<any>
  & {};

export const FieldText: FC<FieldtextType> = ({
  onChange,
  touched,
  error,
  ...props
}) => {
  const [TextareaRef, onChangeTextarea] = useChangeHeightTextarea(onChange)
  const isError = (touched && !!error);
  const isValid = (touched && !error);

  return (
    <S.Wrap>
      <S.Textarea {...props} ref={TextareaRef} onChange={onChangeTextarea}/>

      <ErrorAnimation isError={isError}>
        {error}
      </ErrorAnimation>
    </S.Wrap>
  );
};
