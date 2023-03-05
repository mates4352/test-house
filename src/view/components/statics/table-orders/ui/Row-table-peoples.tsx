import * as React from 'react';
import * as S from '../lib/styles/Table-orders-styles';
import { FC } from 'react';
import { IconDelete } from '../../../icons/Icon-delete';

type RowTablePeoplesType = {
  el: any;
  admin?: boolean;
  onDeleteOrder: (id: string) => () => void;
  onRedirect: (id: string) => () => void;
};

export const RowTablePeoples: FC<RowTablePeoplesType> = ({
  el,
  onDeleteOrder,
  onRedirect,
  ...props
}) => {
  return (
    <S.Tr {...props}>
      <S.Td onClick={onRedirect(el.id)}>
        <S.Name>{el.name}</S.Name>
      </S.Td>

      <S.Td onClick={onRedirect(el.id)}>
        <S.Text>{el.ragion}</S.Text>
      </S.Td>

      <S.Td onClick={onRedirect(el.id)}>
        <S.Text>{el.numberStreet}</S.Text>
      </S.Td>

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
    </S.Tr>
  );
};
