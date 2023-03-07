import React, { FC } from 'react';
import * as S from '../lib/styles/Personal-cabinet-styles';
import { Outlet } from 'react-router-dom';
import { windowScroll } from '../../../../../core/utils/helpers/functions/windowScroll';

type PersonalCabinetType = {};

export const PersonalCabinet: FC<PersonalCabinetType> = ({}) => {
  windowScroll();

  return (
    <S.PersonalCabinet>
      <Outlet />
    </S.PersonalCabinet>
  );
};
