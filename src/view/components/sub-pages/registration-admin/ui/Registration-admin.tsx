import React, {FC} from 'react';
import {RegistrationAdminStyles} from "../lib/styles/Registration-admin-styles";
import {LinkAuth} from "../../../../../core/utils/enum/links/link-auth";
import {FormRegistrationAdmin} from "../../../forms/form-registration-admin";

type RegistrationAdminType = {};

export const RegistrationAdmin: FC<RegistrationAdminType> = ({}) => {
  const {RegistrationAdmin, Title, LinkElement} = RegistrationAdminStyles

  return (
    <RegistrationAdmin>
      <Title>Registration-admin</Title>

      <FormRegistrationAdmin/>

      <LinkElement to={LinkAuth.AUTH}>Назад</LinkElement>
    </RegistrationAdmin>
  );
};
