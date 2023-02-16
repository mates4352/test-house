import React, { FC } from 'react';
import * as S from '../lib/styles/Phone-code-styles';
import { LinkAuth } from '../../../../../core/utils/enum/links/link-auth';
import { FormPhoneCode } from '../../../forms/form-phone-code';

type PhoneCodeType = {};

export const PhoneCode: FC<PhoneCodeType> = ({}) => {
  return (
    <S.PhoneCode>
      <S.Title>Phone-code</S.Title>

      <FormPhoneCode />

      <S.LinkElement to={LinkAuth.AUTH}>Назад</S.LinkElement>
    </S.PhoneCode>
  );
};
