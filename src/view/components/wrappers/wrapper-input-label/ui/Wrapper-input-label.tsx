import React, {FC, ReactNode} from 'react';
import {WrapperInputLabelStyles} from "../lib/styles/Wrapper-input-label-styles";

type WrapperInputLabelType = {
  label: string
  children: ReactNode
};

export const WrapperInputLabel: FC<WrapperInputLabelType> = ({
  label,
  children,
  ...props
}) => {
  const {WrapperInputLabel, Label} = WrapperInputLabelStyles

  return (
    <WrapperInputLabel {...props}>
      <Label>{label}</Label>

      {children}
    </WrapperInputLabel>
  );
};
