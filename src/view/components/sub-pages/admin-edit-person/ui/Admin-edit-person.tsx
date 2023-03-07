import React, { FC } from 'react';
import * as S from '../lib/styles/Admin-edit-person-styles';
import { Outlet, useParams } from 'react-router-dom';
import { windowScroll } from '../../../../../core/utils/helpers/functions/windowScroll';
import { LinkAdmin } from '../../../../../core/utils/enum/links/link-admin';

type AdminEditPersonType = {};

export const AdminEditPerson: FC<AdminEditPersonType> = ({}) => {
  windowScroll();
  const params = useParams<{ id: string }>();

  return (
    <S.AdminEditPerson>
      <S.ButtonBack />

      <S.Title>Личный кабинет</S.Title>

      <S.Links
        arrayLinks={[
          { text: 'Данные', link: '' },
          {
            text: 'Список обращений',
            link: LinkAdmin.LIST_ORDERS,
          },
        ]}
      />

      <Outlet />
    </S.AdminEditPerson>
  );
};
