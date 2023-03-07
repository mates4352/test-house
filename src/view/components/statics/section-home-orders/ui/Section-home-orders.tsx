import React, { FC } from 'react';
import * as S from '../lib/styles/Section-home-orders-styles';
import { CustomLink } from '../../../actions/custom-link';
import { CustomButtonPlus } from '../../../actions/custom-button-plus';
import { TableOrders } from '../../table-orders';
import { RowTableOrders } from '../../table-orders/ui/Row-table-orders';
import { useSectionHomeOrders } from '../lib/hooks/useSectionHomeOrders';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';

type SectionHomeOrdersType = {};

export const SectionHomeOrders: FC<SectionHomeOrdersType> = ({ ...props }) => {
  const [arrayOrders, onDeleteOrder, onButtonRedirect, onRedirect] =
    useSectionHomeOrders();

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

        <CustomLink to={LinkMain.PERSONAL_CABINET_LIST_ORDERS}>
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
