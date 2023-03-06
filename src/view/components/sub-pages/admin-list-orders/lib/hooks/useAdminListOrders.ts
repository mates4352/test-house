import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../../../core/utils/hooks/useAppDispatch';
import { useCallback, useState } from 'react';
import { arrayDataOrdersTest } from '../../../../statics/table-orders/data';
import { showPopup } from '../../../../../../core/controller/slice/Popup-slice';
import { StatusPopup } from '../../../../../../core/utils/enum/status/status-popup';
import { StatusOrdersType } from '../../../../../../core/types/global/status/status-orders-type';
import { LinkAdminMainOrders } from '../../../../../../core/utils/enum/links/link-admin-main-orders';
import { StatusOrder } from '../../../../../../core/utils/enum/status/status-order';

export const useAdminListOrders = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [arrayOrders, setArrayOrder] = useState(arrayDataOrdersTest);

  const onDeleteOrder = useCallback(
    (id: string) => () => {
      dispatch(showPopup(StatusPopup.POPUP_DELETE_STATUS));
      setArrayOrder(arrayOrders.filter(el => el.id !== id));
    },
    [arrayOrders],
  );

  const onRedirect = (id: string) => () => {
    navigate(LinkAdminMainOrders.LIST_MAIN_ORDER_CHAT + '/' + id);
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
