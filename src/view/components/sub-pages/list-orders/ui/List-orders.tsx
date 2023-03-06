import React, { FC } from 'react';
import * as S from '../lib/styles/List-orders-styles';
import { Pagination } from '../../../actions/pagination';
import { RowTableOrders } from '../../../statics/table-orders/ui/Row-table-orders';
import { useListOrders } from '../lib/hooks/useListOrders';

type ListOrdersType = {};

export const ListOrders: FC<ListOrdersType> = ({ ...props }) => {
  const [arrayOrders, onDeleteOrder, onRedirect, onChangeStatusOrder] =
    useListOrders();

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
    <S.ListOrders {...props}>
      <S.SelectOrder
        optionAllOrder
        title={'Сортировка по статусу'}
        onCallbackStatus={onChangeStatusOrder}
      />

      <S.Table
        arrayTh={['Номер', 'Название', 'Дата обращения', 'Статус']}
        returnArrayRow={returnArrayRow}
        onDeleteOrder={onDeleteOrder}
        onRedirect={onRedirect}
      />

      <Pagination
        selectOptionValue={10}
        arrayOptionSelect={[20, 30, 50, 100]}
        pageCount={10}
        currentPage={1}
        pageCurrentCount={190}
        maxPageNumber={5}
      />
    </S.ListOrders>
  );
};
