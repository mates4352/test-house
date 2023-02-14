import {FC, useCallback, useState} from "react";
import * as S from '../lib/styles/List-orders-styles'
import {TableOrders} from "../../../statics/table-orders";
import {arrayDataOrdersTest} from "../../../statics/table-orders/lib/data-test/data";
import {StatusOrdersType} from "../../../../../core/types/global/status/status-orders-type";
type ListOrdersType = {};

export const ListOrders: FC<ListOrdersType> = ({}) => {
  const [arrayOrders, setArrayOrder] = useState(arrayDataOrdersTest)

  const onDeleteOrder = useCallback((id: string) => () => {
    setArrayOrder(arrayOrders.filter(el => el.id !== id))
  }, [arrayOrders])

  const onChangeStatusOrder = useCallback((id: string) => (status: StatusOrdersType) => () => {
    setArrayOrder(arrayOrders.map(el => el.id === id ? {...el, status: status} : el))
  }, [arrayOrders])

  return (
    <S.ListOrders>
      <TableOrders
        arrayDataOrders={arrayOrders}
        onDeleteOrder={onDeleteOrder}
      />
    </S.ListOrders>
  )
}