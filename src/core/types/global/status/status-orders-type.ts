import { StatusOrder } from '../../../utils/enum/status/status-order';

export type StatusOrdersType =
  | StatusOrder.SENT
  | StatusOrder.IN_PROCESSING
  | StatusOrder.DONE;
