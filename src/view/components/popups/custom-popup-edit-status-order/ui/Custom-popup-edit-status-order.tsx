import React, {FC} from 'react';
import * as S from "../lib/styles/Custom-popup-edit-status-order-styles";
import {StatusOrder} from "../../../../../core/utils/enum/status/status-order";

type CustomPopupEditStatusOrderType = {
  ref: any
  className?: string
  onChangeStatusOrder: (status: StatusOrder.SENT | StatusOrder.IN_PROCESSING | StatusOrder.ACCEPTED) => () => void
};

export const CustomPopupEditStatusOrder: FC<CustomPopupEditStatusOrderType> = React.forwardRef((props, ref: any) => {

  return (
    <S.CustomPopupEditStatusOrder className={props.className} ref={ref}>
      <S.List>
        <S.Item>
          <S.Button type={'button'} onClick={props.onChangeStatusOrder(StatusOrder.SENT)}>
            {StatusOrder.SENT}
          </S.Button>
        </S.Item>

        <S.Item>
          <S.Button type={'button'} onClick={props.onChangeStatusOrder(StatusOrder.IN_PROCESSING)}>
            {StatusOrder.IN_PROCESSING}
          </S.Button>
        </S.Item>

        <S.Item>
          <S.Button type={'button'} onClick={props.onChangeStatusOrder(StatusOrder.ACCEPTED)}>
            {StatusOrder.ACCEPTED}
          </S.Button>
        </S.Item>
      </S.List>
    </S.CustomPopupEditStatusOrder>
  );
})
