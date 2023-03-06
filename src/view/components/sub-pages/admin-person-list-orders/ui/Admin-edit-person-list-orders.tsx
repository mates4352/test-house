import React, { FC } from 'react';
import * as S from '../lib/styles/Admin-edit-person-list-orders-styles';
import { TableOrders } from '../../../statics/table-orders';
import { RowTableOrders } from '../../../statics/table-orders/ui/Row-table-orders';
import { useAdminEditPersonListOrders } from '../lib/hooks/useAdminEditPersonListOrders';

type AdminEditPersonListOrdersType = {};

export const AdminEditPersonListOrders: FC<
  AdminEditPersonListOrdersType
> = ({}) => {
  const [
    arrayOrders,
    onDeleteOrder,
    onButtonRedirect,
    onRedirect,
    onChangeStatusOrder,
  ] = useAdminEditPersonListOrders();
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
    <S.AdminEditPersonListOrders>
      <S.SelectOrder
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
    </S.AdminEditPersonListOrders>
  );
};
