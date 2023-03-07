import React, { FC } from 'react';
import * as S from '../lib/styles/Table-orders-styles';

type TableOrdersType = {
  admin?: boolean;
  arrayTh: string[];
  onDeleteOrder: (id: string) => () => void;
  onRedirect: (id: string) => () => void;
  returnArrayRow: (admin: boolean) => any[];
};

export const TableOrders: FC<TableOrdersType> = React.memo(
  ({ admin, arrayTh, onRedirect, onDeleteOrder, returnArrayRow, ...props }) => {
    return (
      <S.Table
        {...props}
        admin={admin}>
        <S.Tbody>
          <S.Tr>
            {arrayTh.map(text => (
              <S.Th key={text}>{text}</S.Th>
            ))}
          </S.Tr>
        </S.Tbody>

        <S.Thead>{returnArrayRow(Boolean(admin))}</S.Thead>
      </S.Table>
    );
  },
);
