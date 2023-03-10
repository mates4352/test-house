import React, { FC } from 'react';
import * as S from '../lib/styles/Admin-list-routing-styles';
import { ListLinks } from '../../../actions/list-links';
import { Outlet } from 'react-router-dom';
import { LinkList } from '../../../../../core/utils/enum/links/link-list';
import { useRedirect } from '../../../../../core/utils/hooks/useRedirect';
import { LinkAdmin } from '../../../../../core/utils/enum/links/link-admin';

type AdminListRoutingType = {};

export const AdminListRouting: FC<AdminListRoutingType> = ({}) => {
  return (
    <S.AdminListRouting>
      <ListLinks
        arrayLinks={[
          { text: 'Список заявок', link: '' },
          { text: 'Список медераторов', link: LinkList.MODERATORS },
          { text: 'Список жильцов', link: LinkList.Person },
          { text: 'Список новостей', link: LinkList.NEWS },
        ]}
      />
      <Outlet />
    </S.AdminListRouting>
  );
};
