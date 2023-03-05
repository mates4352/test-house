import styled, { css } from 'styled-components';
import { StatusOrdersType } from '../../../../../../core/types/global/status/status-orders-type';
import { StatusOrder } from '../../../../../../core/utils/enum/status/status-order';

type StatusType = {
  status: StatusOrdersType | '';
};

const Status = styled.div``;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33px);
  column-gap: 8px;
  margin-bottom: 4px;
`;

const Item = styled.div``;

const StatusProgressBar = styled.div<StatusType>`
  height: 8px;
  background-color: var(--silver);
  border-radius: 12px;

  ${props =>
    props.status === StatusOrder.SENT &&
    css`
      background-color: var(--deep-blue);
    `}

  ${props =>
    props.status === StatusOrder.IN_PROCESSING &&
    css`
      background-color: var(--process);
    `}

  ${props =>
    props.status === StatusOrder.DONE &&
    css`
      background-color: var(--success);
    `}
`;

const StatusText = styled.div`
  font: var(--text-16);
  color: var(--silver);
`;

export { Status, List, Item, StatusProgressBar, StatusText };
