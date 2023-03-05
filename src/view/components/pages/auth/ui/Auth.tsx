import React, { FC } from 'react';
import logo from './../../../../../assets/images/logo.svg';
import * as S from '../lib/styles/Auth-styles';
import { Outlet } from 'react-router-dom';

type AuthType = {};

export const Auth: FC<AuthType> = ({}) => {
  return (
    <S.Auth>
      <S.Wrap>
        <S.Image
          src={logo}
          alt="Логотип умный дом"
        />

        <Outlet />
      </S.Wrap>
    </S.Auth>
  );
};
