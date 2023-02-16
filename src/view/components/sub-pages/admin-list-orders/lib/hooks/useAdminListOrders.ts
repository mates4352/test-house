import { useCallback, useState } from 'react';
import { StatusOrdersType } from '../../../../../../core/types/global/status/status-orders-type';
import { arrayDataOrdersTest } from '../../../../statics/table-orders/lib/data-test/data';

export const useAdminListOrders = () => {
  const [arrayOrders, setArrayOrder] = useState(arrayDataOrdersTest);

  const onDeleteOrder = useCallback(
    (id: string) => () => {
      setArrayOrder(arrayOrders.filter(el => el.id !== id));
    },
    [arrayOrders],
  );

  const onChangeStatusOrder = useCallback(
    (id: string) => (status: StatusOrdersType) => () => {
      setArrayOrder(
        arrayOrders.map(el => (el.id === id ? { ...el, status: status } : el)),
      );
    },
    [arrayOrders],
  );

  const onSearchTableStatus = (value: string) => {
    if (value)
      setArrayOrder(
        arrayOrders.filter(
          el =>
            el.status.slice(0, value.length).toLowerCase() ===
            value.toLowerCase(),
        ),
      );
    else setArrayOrder(arrayDataOrdersTest);
  };

  return [
    arrayOrders,
    onDeleteOrder,
    onSearchTableStatus,
    onChangeStatusOrder,
  ] as const;
};
