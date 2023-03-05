import React, { FC } from 'react';
import * as S from '../lib/styles/Admin-edit-moderator-styles';
import { FormModerator } from '../../../forms/form-moderator';
import { windowScroll } from '../../../../../core/utils/helpers/functions/windowScroll';

type AdminEditModeratorType = {};

export const AdminEditModerator: FC<AdminEditModeratorType> = ({}) => {
  windowScroll();
  return (
    <S.AdminEditModerator>
      <S.ButtonBack />
      <S.Title>Андреев Акакий Петрович</S.Title>

      <FormModerator />
    </S.AdminEditModerator>
  );
};
