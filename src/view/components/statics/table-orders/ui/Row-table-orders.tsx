import React, { FC } from 'react';
import * as S from '../lib/styles/Table-orders-styles';
import { IconDelete } from '../../../icons/Icon-delete';
import { Status } from '../../status';

type RowTableOrdersType = {
  el: any;
  admin?: boolean;
  onDeleteOrder: (id: string) => () => void;
  onRedirect: (id: string) => () => void;
};

export const RowTableOrders: FC<RowTableOrdersType> = React.memo(
  ({ el, admin, onDeleteOrder, onRedirect, ...props }) => {
    return (
      <S.Tr {...props}>
        <S.Td onClick={onRedirect(el.id)}>
          <S.Text>{el.id}</S.Text>
        </S.Td>

        <S.Td onClick={onRedirect(el.id)}>
          <S.Name>{el.name}</S.Name>
        </S.Td>

        <S.Td onClick={onRedirect(el.id)}>
          <S.Date dateTime={el.date}>18 ноября 2015</S.Date>
        </S.Td>

        <S.Td onClick={onRedirect(el.id)}>
          <Status status={el.status} />
        </S.Td>

        {admin && (
          <S.Td>
            <S.ButtonDelete
              type={'button'}
              onClick={onDeleteOrder(el.id)}>
              <IconDelete
                width={20}
                height={23}
              />
            </S.ButtonDelete>
          </S.Td>
        )}
      </S.Tr>
    );
  },
);
