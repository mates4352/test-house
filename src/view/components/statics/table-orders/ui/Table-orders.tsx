import React, {FC} from 'react';
import * as S from "../lib/styles/Table-orders-styles";
import {RowTableOrders} from "./Row-table-orders";
import {StatusOrdersType} from "../../../../../core/types/global/status/status-orders-type";

type TableOrdersType = {
  admin?: boolean
  arrayDataOrders: any
  onDeleteOrder: (id: string) => () => void
  onChangeStatusOrder?: (id: string) => (status: StatusOrdersType) => () => void
};

export const TableOrders: FC<TableOrdersType> = React.memo(({
  admin,
  arrayDataOrders,
  onDeleteOrder,
  onChangeStatusOrder,
  ...props
}) => {

  return (
    <S.Table {...props}>
      <S.Tbody>
        <S.Tr>
          <S.Th>
            Статус
          </S.Th>

          <S.Th>
            Заявка
          </S.Th>

          <S.Th>
            Дата
          </S.Th>

          <S.Th>
          </S.Th>
        </S.Tr>
      </S.Tbody>

      <S.Thead>
        {arrayDataOrders.map((el: any) =>
          <RowTableOrders
            key={el.id} el={el}
            onDeleteOrder={onDeleteOrder}
            onChangeStatusOrder={onChangeStatusOrder && onChangeStatusOrder(el.id)}
            admin={admin}/>
        )}
      </S.Thead>
    </S.Table>
  );
})