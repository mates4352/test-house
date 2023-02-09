import React, {FC} from 'react';
import {PhoneCodeStyles} from "../lib/styles/Phone-code-styles";
import {LinkAuth} from "../../../../../core/utils/enum/links/link-auth";
import {FormPhoneCode} from "../../../forms/form-phone-code";

type PhoneCodeType = {};

export const PhoneCode: FC<PhoneCodeType> = ({}) => {
  const {PhoneCode, Title, LinkElement} = PhoneCodeStyles

  return (
    <PhoneCode>
      <Title>Phone-code</Title>

      <FormPhoneCode/>

      <LinkElement to={LinkAuth.AUTH}>Назад</LinkElement>
    </PhoneCode>
  );
};
