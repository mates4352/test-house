import React, {FC} from 'react';
import {CustomInputMaskStyles} from "../lib/styles/Custom-input-mask-styles";
import InputMask from "react-input-mask";

type InputMaskType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &{
  formik?: any
  mask?: string | Array<(string | RegExp)>
  name: string
}

export const CustomInputMask: FC<InputMaskType> = ({
  name,
  mask,
  formik,
  ...props
}) => {
  const {Input} = CustomInputMaskStyles

  return (
    <InputMask
      mask={mask}
      maskPlaceholder={''}
      {...props}
      {...formik.getFieldProps(name)}
      {...formik.getFieldMeta(name)}
    >
      <Input/>
    </InputMask>
  );
};
