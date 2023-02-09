import React, {FC} from 'react';
import {InputStyles} from "../lib/styles/Input-styles";
import {ErrorAnimation} from "../../../statics/error";
import {FieldInputProps, FieldMetaProps} from "formik/dist/types";

export type InputType =
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  & FieldMetaProps<any>
  & FieldInputProps<any>
  & {};

export const Input: FC<InputType> = ({
  touched,
  error,
  ...props
}) => {
  const {Wrap, Input} = InputStyles
  const isError = (touched && !!error);
  const isValid = (touched && !error);

  return (
    <Wrap>
      <Input {...props} isError={isError} isValid={isValid}/>

      <ErrorAnimation isError={isError}>
        {error}
      </ErrorAnimation>
    </Wrap>
  );
};
