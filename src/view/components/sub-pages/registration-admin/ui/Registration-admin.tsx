import React, {FC} from 'react';
import * as S from "../lib/styles/Registration-admin-styles";
import {LinkAuth} from "../../../../../core/utils/enum/links/link-auth";
import {FormRegistrationAdmin} from "../../../forms/form-registration-admin";

type RegistrationAdminType = {};

export const RegistrationAdmin: FC<RegistrationAdminType> = ({}) => {

  return (
    <S.RegistrationAdmin>
      <S.Title>Registration-admin</S.Title>

      <FormRegistrationAdmin/>

      <S.LinkElement to={LinkAuth.AUTH}>Назад</S.LinkElement>
    </S.RegistrationAdmin>
  );
};
