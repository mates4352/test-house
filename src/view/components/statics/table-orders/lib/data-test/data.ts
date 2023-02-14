import uuid from "react-uuid";
import {StatusOrder} from "../../../../../../core/utils/enum/status/status-order";

export const arrayDataOrdersTest = [
  {
    id: uuid(),
    date: '2015-11-18',
    nameOrder: 'электрика',
    status: StatusOrder.SENT
  },

  {
    id: uuid(),
    date: '2016-11-18',
    nameOrder: 'электрика',
    status: StatusOrder.IN_PROCESSING
  },

  {
    id: uuid(),
    date: '2017-11-18',
    nameOrder: 'электрика',
    status: StatusOrder.ACCEPTED
  },

  {
    id: uuid(),
    date: '2017-11-18',
    nameOrder: 'электрика',
    status: StatusOrder.ACCEPTED
  },

  {
    id: uuid(),
    date: '2017-11-18',
    nameOrder: 'электрика',
    status: StatusOrder.ACCEPTED
  },

  {
    id: uuid(),
    date: '2017-11-18',
    nameOrder: 'электрика',
    status: StatusOrder.ACCEPTED
  }
]