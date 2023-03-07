import React, { FC } from 'react';
import * as S from '../lib/styles/Admin-styles';
import { Outlet } from 'react-router-dom';
import * as G from '../../../../global-styled-components/global-styled-components';

type AdminType = {};

export const Admin: FC<AdminType> = ({}) => {
  return (
    <S.Admin>
      <G.Container>
        <Outlet />
      </G.Container>
    </S.Admin>
  );
};
