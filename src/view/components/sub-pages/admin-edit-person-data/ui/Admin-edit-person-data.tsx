import React, { FC } from 'react';
import * as S from '../lib/styles/Admin-edit-person-data-styles';
import { FormPersonData } from '../../../forms/form-person-data';

type AdminEditPersonDataType = {};

export const AdminEditPersonData: FC<AdminEditPersonDataType> = ({}) => {
  return (
    <S.AdminEditPersonData>
      <FormPersonData />
    </S.AdminEditPersonData>
  );
};
