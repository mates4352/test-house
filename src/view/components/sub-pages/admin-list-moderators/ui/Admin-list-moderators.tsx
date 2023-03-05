import React, { FC } from 'react';
import * as S from '../lib/styles/Admin-list-moderators-styles';
import { useAdminListModerators } from '../lib/hooks/useAdminListModerators';
import { RowTableOrders } from '../../../statics/table-orders/ui/Row-table-orders';
import { RowTablePeoples } from '../../../statics/table-orders/ui/Row-table-peoples';

type AdminListModeratorsType = {};

export const AdminListModerators: FC<AdminListModeratorsType> = ({}) => {
  const [
    arraySearch,
    arrayNumber,
    arrayPeoples,
    onSearchRegion,
    onSearchNumber,
    onResetCheckBox,
    onCheckedInputRegion,
    onCheckedInputNumber,
    onDeleteOrder,
    onRedirect,
  ] = useAdminListModerators();

  const returnArrayRow = (admin?: boolean) => {
    return arrayPeoples.map((el: any) => (
      <RowTablePeoples
        key={el.id}
        el={el}
        onDeleteOrder={onDeleteOrder}
        admin={admin}
        onRedirect={onRedirect}
      />
    ));
  };

  return (
    <S.AdminListModerators>
      <S.Wrap>
        <S.Select
          arrayTest={arraySearch}
          title={'Район'}
          onSearchInput={onSearchRegion}
          onCallbackCheckedInput={onCheckedInputRegion}
        />
        <S.Select
          arrayTest={arrayNumber}
          title={'Номер участка'}
          onSearchInput={onSearchNumber}
          onCallbackCheckedInput={onCheckedInputNumber}
        />

        <S.ButtonReset onCallback={onResetCheckBox}>
          Сбросить фильтры
        </S.ButtonReset>
      </S.Wrap>

      <S.Table
        admin
        arrayTh={['ФИО', 'Район', 'Номер участка', '']}
        returnArrayRow={returnArrayRow}
        onDeleteOrder={onDeleteOrder}
        onRedirect={onRedirect}
      />

      <S.PaginationModerators
        selectOptionValue={10}
        arrayOptionSelect={[20, 30, 50, 100]}
        pageCount={8}
        currentPage={1}
        pageCurrentCount={190}
        maxPageNumber={5}
      />
    </S.AdminListModerators>
  );
};
