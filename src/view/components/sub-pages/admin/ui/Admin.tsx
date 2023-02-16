import React, { FC } from 'react';
import * as S from '../lib/styles/Admin-styles';
import { Outlet } from 'react-router-dom';
import { LinkAdmin } from '../../../../../core/utils/enum/links/link-admin';
import { useRedirect } from '../../../../../core/utils/hooks/useRedirect';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';
import * as G from '../../../../global-styled-components/global-styled-components';

type AdminType = {};

export const Admin: FC<AdminType> = ({}) => {
  useRedirect(LinkMain.ADMIN, LinkAdmin.LIST);

  return (
    <S.Admin>
      <G.Container>
        <Outlet />
      </G.Container>
    </S.Admin>
  );
};
