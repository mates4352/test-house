import React, { FC } from 'react';
import * as S from '../lib/styles/Cabinet-main-styles';
import { ListLinks } from '../../../actions/list-links';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';
import { Outlet } from 'react-router-dom';

type CabinetMainType = {};

export const CabinetMain: FC<CabinetMainType> = ({}) => {
  return (
    <S.CabinetMain>
      <S.Title>Личный кабинет</S.Title>

      <ListLinks
        arrayLinks={[
          { text: 'Данные', link: '' },
          {
            text: 'Список заявок',
            link: LinkMain.PERSONAL_CABINET_LIST_ORDERS,
          },
        ]}
      />

      <Outlet />
    </S.CabinetMain>
  );
};
