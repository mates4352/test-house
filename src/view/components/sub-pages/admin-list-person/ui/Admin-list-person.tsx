import React, { FC } from 'react';
import * as S from '../lib/styles/Admin-list-person-styles';
import { useAdminListPerson } from '../lib/hooks/useAdminListPerson';
import { RowTablePeoples } from '../../../statics/table-orders/ui/Row-table-peoples';

type AdminListPersonType = {};

export const AdminListPerson: FC<AdminListPersonType> = ({}) => {
  const [
    arraySearch,
    arrayStreet,
    arrayPeoples,
    onSearchRegion,
    onSearchStreet,
    onResetCheckBox,
    onCheckedInputRegion,
    onCheckedInputStreet,
    onDeleteOrder,
    onRedirect,
  ] = useAdminListPerson();
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
    <S.AdminListPerson>
      <S.Wrap>
        <S.Select
          arrayTest={arraySearch}
          title={'Район'}
          onSearchInput={onSearchRegion}
          onCallbackCheckedInput={onCheckedInputRegion}
        />
        <S.Select
          arrayTest={arrayStreet}
          title={'Улица'}
          onSearchInput={onSearchStreet}
          onCallbackCheckedInput={onCheckedInputStreet}
        />

        <S.ButtonReset onCallback={onResetCheckBox}>
          Сбросить фильтры
        </S.ButtonReset>
      </S.Wrap>
      <S.Table
        admin
        arrayTh={['ФИО', 'Район', 'Улица', '']}
        returnArrayRow={returnArrayRow}
        onDeleteOrder={onDeleteOrder}
        onRedirect={onRedirect}
      />
      <S.PaginationLodgers
        selectOptionValue={10}
        arrayOptionSelect={[20, 30, 50, 100]}
        pageCount={8}
        currentPage={1}
        pageCurrentCount={190}
        maxPageNumber={5}
      />
    </S.AdminListPerson>
  );
};
