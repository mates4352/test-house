import React, {FC} from 'react';
import * as S from "../lib/styles/Custom-input-mask-styles";
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

  return (
    <InputMask
      mask={mask}
      maskPlaceholder={''}
      {...props}
      {...formik.getFieldProps(name)}
      {...formik.getFieldMeta(name)}
    >
      <S.Input/>
    </InputMask>
  );
};
