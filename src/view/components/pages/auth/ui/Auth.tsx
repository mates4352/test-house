import React, { FC } from 'react';
import * as S from '../lib/styles/Auth-styles';
import { Outlet } from 'react-router-dom';

type AuthType = {};

export const Auth: FC<AuthType> = ({}) => {
  return (
    <S.Auth>
      <Outlet />
    </S.Auth>
  );
};
