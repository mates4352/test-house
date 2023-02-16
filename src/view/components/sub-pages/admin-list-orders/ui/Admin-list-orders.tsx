import React, { FC } from 'react';
import * as S from '../lib/styles/Admin-list-orders-styles';
import { Pagination } from '../../../actions/pagination';
import { useAdminListOrders } from '../lib/hooks/useAdminListOrders';

type AdminListOrdersType = {};

export const AdminListOrders: FC<AdminListOrdersType> = ({}) => {
  const [arrayOrders, onDeleteOrder, onSearchTableStatus, onChangeStatusOrder] =
    useAdminListOrders();

  return (
    <S.AdminListOrders>
      <S.InputSearch
        onSearchInputValue={onSearchTableStatus}
        placeholder={'Поиск по статусу'}
      />
      <S.Table
        admin
        arrayDataOrders={arrayOrders}
        onDeleteOrder={onDeleteOrder}
        onChangeStatusOrder={onChangeStatusOrder}
      />

      <Pagination
        selectOptionValue={5}
        arrayOptionSelect={[10, 15, 20]}
        pageCount={8}
        currentPage={1}
        pageCurrentCount={190}
        maxPageNumber={5}
      />
    </S.AdminListOrders>
  );
};
