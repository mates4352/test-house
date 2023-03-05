import React, { FC, useCallback, useState } from 'react';
import * as S from '../lib/styles/Section-home-orders-styles';
import { CustomLink } from '../../../actions/custom-link';
import { LinkCabinet } from '../../../../../core/utils/enum/links/link-cabinet';
import { CustomButtonPlus } from '../../../actions/custom-button-plus';
import { TableOrders } from '../../table-orders';
import { useNavigate } from 'react-router-dom';
import { arrayDataOrdersTest } from '../../table-orders/data';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';
import { RowTableOrders } from '../../table-orders/ui/Row-table-orders';

type SectionHomeOrdersType = {};

export const SectionHomeOrders: FC<SectionHomeOrdersType> = ({ ...props }) => {
  const [arrayOrders, setArrayOrder] = useState(arrayDataOrdersTest);
  const navigate = useNavigate();

  const onDeleteOrder = useCallback(
    (id: string) => () => {
      setArrayOrder(arrayOrders.filter(el => el.id !== id));
    },
    [arrayOrders],
  );

  const onButtonRedirect = () => {
    navigate(LinkMain.APPEAL);
  };

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
    <S.SectionHomeOrders {...props}>
      <S.Wrap>
        <S.WrapButton>
          <S.Title>Мои обращения</S.Title>

          <CustomButtonPlus onCallback={onButtonRedirect}>
            Создать обращение
          </CustomButtonPlus>
        </S.WrapButton>

        <CustomLink to={LinkCabinet.PERSONAL_CABINET_LIST_ORDERS}>
          Посмотреть все
        </CustomLink>
      </S.Wrap>

      <TableOrders
        arrayTh={['Номер', 'Название', 'Дата обращения', 'Статус']}
        returnArrayRow={returnArrayRow}
        onDeleteOrder={onDeleteOrder}
        onRedirect={onRedirect}
      />
    </S.SectionHomeOrders>
  );
};
