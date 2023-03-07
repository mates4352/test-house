import { useCallback, useState } from 'react';
import { StatusOrder } from '../../../../../../core/utils/enum/status/status-order';
import { useNavigate } from 'react-router-dom';
import { StatusOrdersType } from '../../../../../../core/types/global/status/status-orders-type';
import { arrayDataOrdersTest } from '../../../../statics/table-orders/data';
import { showPopup } from '../../../../../../core/controller/slice/Popup-slice';
import { StatusPopup } from '../../../../../../core/utils/enum/status/status-popup';
import { useAppDispatch } from '../../../../../../core/utils/hooks/useAppDispatch';
import { LinkAdmin } from '../../../../../../core/utils/enum/links/link-admin';

export const useAdminEditPersonListOrders = () => {
  const dispatch = useAppDispatch();
  const [arrayOrders, setArrayOrder] = useState(arrayDataOrdersTest);
  const navigate = useNavigate();

  const onDeleteOrder = useCallback(
    (id: string) => () => {
      dispatch(showPopup(StatusPopup.POPUP_DELETE_STATUS));
      setArrayOrder(arrayOrders.filter(el => el.id !== id));
    },
    [arrayOrders],
  );

  const onRedirect = (id: string) => () => {
    navigate(LinkAdmin.CHAT + '/' + id);
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
