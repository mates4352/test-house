import React, {FC, useCallback, useState} from 'react';
import * as S from "../lib/styles/Admin-list-orders-styles";
import {arrayDataOrdersTest} from "../../../statics/table-orders/lib/data-test/data";
import {StatusOrdersType} from "../../../../../core/types/global/status/status-orders-type";
import {TableOrders} from "../../../statics/table-orders";
import {CustomInputSearch} from "../../../actions/custom-input-search";

type AdminListOrdersType = {

};

export const AdminListOrders: FC<AdminListOrdersType> = ({}) => {
  const [arrayOrders, setArrayOrder] = useState(arrayDataOrdersTest)

  const onDeleteOrder = useCallback((id: string) => () => {
    setArrayOrder(arrayOrders.filter(el => el.id !== id))
  }, [arrayOrders])

  const onChangeStatusOrder = useCallback((id: string) => (status: StatusOrdersType) => () => {
    setArrayOrder(arrayOrders.map(el => el.id === id ? {...el, status: status} : el))
  }, [arrayOrders])

  const onSearchTableStatus = (value: string) => {
    if(value) setArrayOrder(arrayOrders.filter(el => el.status.slice(0, value.length).toLowerCase() === value.toLowerCase()))
    else setArrayOrder(arrayDataOrdersTest)
  }

  return (
    <S.AdminListOrders>
      <S.InputSearch onSearchInputValue={onSearchTableStatus} placeholder={'Поиск по статусу'}/>
      <TableOrders
        admin
        arrayDataOrders={arrayOrders}
        onDeleteOrder={onDeleteOrder}
        onChangeStatusOrder={onChangeStatusOrder}
      />
    </S.AdminListOrders>
  );
};
