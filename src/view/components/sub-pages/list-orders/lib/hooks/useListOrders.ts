import { useCallback, useState } from 'react';
import { arrayDataOrdersTest } from '../../../../statics/table-orders/data';
import { useNavigate } from 'react-router-dom';
import { LinkMain } from '../../../../../../core/utils/enum/links/link-main';
import { StatusOrdersType } from '../../../../../../core/types/global/status/status-orders-type';
import { StatusOrder } from '../../../../../../core/utils/enum/status/status-order';

export const useListOrders = () => {
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

  const onChangeStatusOrder = (status: StatusOrdersType) => {
    if (status === StatusOrder.ALL) {
      setArrayOrder(arrayDataOrdersTest);
    } else {
      setArrayOrder(arrayDataOrdersTest.filter(el => el.status === status));
    }
  };

  return [arrayOrders, onDeleteOrder, onRedirect, onChangeStatusOrder] as const;
};
