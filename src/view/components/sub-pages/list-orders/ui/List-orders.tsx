import React, { FC, useCallback, useState } from 'react';
import * as S from '../lib/styles/List-orders-styles';
import { arrayDataOrdersTest } from '../../../statics/table-orders/data';
import { Pagination } from '../../../actions/pagination';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';
import { useNavigate } from 'react-router-dom';
import { RowTableOrders } from '../../../statics/table-orders/ui/Row-table-orders';

type ListOrdersType = {};

export const ListOrders: FC<ListOrdersType> = ({ ...props }) => {
  const [arrayOrders, setArrayOrder] = useState(arrayDataOrdersTest);
  const navigate = useNavigate();

  const onDeleteOrder = useCallback(
    (id: string) => () => {
      setArrayOrder(arrayOrders.filter(el => el.id !== id));
    },
    [arrayOrders],
  );

  const onRedirect = (id: string) => () => {
    navigate(LinkMain.ORDER + '/' + id);
  };

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
