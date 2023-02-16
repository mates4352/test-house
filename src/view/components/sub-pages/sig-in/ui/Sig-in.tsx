import React, { FC } from 'react';
import * as S from '../lib/styles/Sig-in-styles';
import { FormSigIn } from '../../../forms/form-sig-in';
type SigInType = {};

export const SigIn: FC<SigInType> = ({}) => {
  return (
    <S.SigIn>
      <S.Title>Sig-in</S.Title>

      <FormSigIn />
    </S.SigIn>
  );
};
