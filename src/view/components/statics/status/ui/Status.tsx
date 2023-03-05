import React, { FC } from 'react';
import * as S from '../lib/styles/Status-styles';
import { StatusOrdersType } from '../../../../../core/types/global/status/status-orders-type';
import { StatusOrder } from '../../../../../core/utils/enum/status/status-order';

type StatusType = {
  status: StatusOrdersType | '';
};

export const Status: FC<StatusType> = ({ status, ...props }) => {
  const statusText = () => {
    switch (status) {
      case StatusOrder.SENT:
        return StatusOrder.SENT;
      case StatusOrder.IN_PROCESSING:
        return StatusOrder.IN_PROCESSING;
      case StatusOrder.DONE:
        return StatusOrder.DONE;
    }
  };
  return (
    <S.Status {...props}>
      <S.List>
        <S.Item>
          <S.StatusProgressBar status={status} />
        </S.Item>

        <S.Item>
          <S.StatusProgressBar
            status={
              status === StatusOrder.IN_PROCESSING ||
              status === StatusOrder.DONE
                ? status
                : ''
            }
          />
        </S.Item>

        <S.Item>
          <S.StatusProgressBar
            status={status === StatusOrder.DONE ? status : ''}
          />
        </S.Item>
      </S.List>

      <S.StatusText>{statusText()}</S.StatusText>
    </S.Status>
  );
};
