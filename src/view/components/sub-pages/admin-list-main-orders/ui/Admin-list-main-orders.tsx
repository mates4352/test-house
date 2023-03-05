import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useRedirect } from '../../../../../core/utils/hooks/useRedirect';
import { LinkList } from '../../../../../core/utils/enum/links/link-list';
import { LinkAdminMainOrders } from '../../../../../core/utils/enum/links/link-admin-main-orders';

type AdminListMainOrdersType = {};

export const AdminListMainOrders: FC<AdminListMainOrdersType> = ({}) => {
  useRedirect(LinkList.LIST_MAIN, LinkAdminMainOrders.LIST_MAIN_ORDERS);
  return <Outlet />;
};
