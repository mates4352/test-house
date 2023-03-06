import { useCallback, useState } from 'react';
import { StatusOrder } from '../../../../../../core/utils/enum/status/status-order';
import { useNavigate } from 'react-router-dom';
import { LinkMain } from '../../../../../../core/utils/enum/links/link-main';

export const useSectionHomeOrders = () => {
  const [arrayOrders, setArrayOrder] = useState([
    {
      id: '13562-5618',
      name: 'электрика',
      date: '2015-11-18',
      status: StatusOrder.SENT,
    },

    {
      id: '13562-5619',
      date: '2016-11-18',
      name: 'электрика',
      status: StatusOrder.IN_PROCESSING,
    },

    {
      id: '13562-56120',
      date: '2017-11-18',
      name: 'электрика',
      status: StatusOrder.DONE,
    },
  ]);
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

  return [arrayOrders, onDeleteOrder, onButtonRedirect, onRedirect] as const;
};
