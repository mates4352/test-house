import React, { FC } from 'react';
import * as S from '../lib/styles/Admin-list-orders-styles';
import { useAdminListOrders } from '../lib/hooks/useAdminListOrders';
import { RowTableOrders } from '../../../statics/table-orders/ui/Row-table-orders';

type AdminListOrdersType = {};

export const AdminListOrders: FC<AdminListOrdersType> = ({}) => {
  const [arrayOrders, onDeleteOrder, onRedirect, onChangeStatusOrder] =
    useAdminListOrders();
  const returnArrayRow = (admin: boolean) => {
    return arrayOrders.map((el: any) => (
      <RowTableOrders
        key={el.id}
        el={el}
        onDeleteOrder={onDeleteOrder}
        admin={admin}
        onRedirect={onRedirect}
      />
    ));
  };

  return (
    <S.AdminListOrders>
      <S.SelectStatus
        optionAllOrder
        title={'Сортировка по статусу'}
        onCallbackStatus={onChangeStatusOrder}
      />

      <S.Table
        admin
        arrayTh={['Номер', 'Название', 'Дата обращения', 'Статус', '']}
        returnArrayRow={returnArrayRow}
        onDeleteOrder={onDeleteOrder}
        onRedirect={onRedirect}
      />

      <S.PaginationOrders
        selectOptionValue={10}
        arrayOptionSelect={[20, 30, 50, 100]}
        pageCount={8}
        currentPage={1}
        pageCurrentCount={190}
        maxPageNumber={5}
      />
    </S.AdminListOrders>
  );
};
