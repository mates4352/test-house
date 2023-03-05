import React, { FC } from 'react';
import * as S from '../lib/styles/Admin-edit-person-styles';
import { LinkAdminEditPerson } from '../../../../../core/utils/enum/links/LinkAdminEditPerson';
import { Outlet, useParams } from 'react-router-dom';
import { useRedirect } from '../../../../../core/utils/hooks/useRedirect';
import { LinkAdmin } from '../../../../../core/utils/enum/links/link-admin';
import { windowScroll } from '../../../../../core/utils/helpers/functions/windowScroll';

type AdminEditPersonType = {};

export const AdminEditPerson: FC<AdminEditPersonType> = ({}) => {
  windowScroll();
  const params = useParams<{ id: string }>();
  useRedirect(
    LinkAdmin.EDIT_PERSON + `/${params.id}`,
    LinkAdminEditPerson.DATA,
  );

  return (
    <S.AdminEditPerson>
      <S.Title>Личный кабинет</S.Title>

      <S.Links
        arrayLinks={[
          { text: 'Данные', link: LinkAdminEditPerson.DATA },
          {
            text: 'Список обращений',
            link: LinkAdminEditPerson.LIST_ORDERS,
          },
        ]}
      />

      <Outlet />
    </S.AdminEditPerson>
  );
};
