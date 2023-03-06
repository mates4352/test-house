import React, { FC } from 'react';
import * as S from '../lib/styles/Select-status-styles';
import { StatusOrder } from '../../../../../core/utils/enum/status/status-order';
import { useSelectStatus } from '../lib/hooks/useSelectStatus';
import { AnimationShow } from '../../../animation/AnimationShow';
import { StatusOrdersType } from '../../../../../core/types/global/status/status-orders-type';

type SelectStatusType = {
  title: string;
  optionAllOrder?: boolean;
  onCallbackStatus: (status: StatusOrdersType) => void;
};

export const SelectStatus: FC<SelectStatusType> = ({
  optionAllOrder,
  title,
  onCallbackStatus,
  ...props
}) => {
  const [
    valueMainButton,
    isList,
    refSelectStatus,
    onChangeStateList,
    onChangeValueMainButton,
  ] = useSelectStatus(title, onCallbackStatus);

  return (
    <S.SelectStatus
      {...props}
      ref={refSelectStatus}>
      <S.ButtonMainStatus
        onCallback={onChangeStateList}
        isActive={isList}>
        {valueMainButton}
      </S.ButtonMainStatus>

      <AnimationShow isAnimation={isList}>
        <S.List>
          {optionAllOrder && (
            <S.Item>
              <S.ButtonStatus
                type={'button'}
                isActive={valueMainButton === StatusOrder.ALL}
                onClick={onChangeValueMainButton(StatusOrder.ALL)}>
                {StatusOrder.ALL}
              </S.ButtonStatus>
            </S.Item>
          )}

          <S.Item>
            <S.ButtonStatus
              type={'button'}
              isActive={valueMainButton === StatusOrder.SENT}
              onClick={onChangeValueMainButton(StatusOrder.SENT)}>
              {StatusOrder.SENT}
            </S.ButtonStatus>
          </S.Item>

          <S.Item>
            <S.ButtonStatus
              type={'button'}
              isActive={valueMainButton === StatusOrder.IN_PROCESSING}
              onClick={onChangeValueMainButton(StatusOrder.IN_PROCESSING)}>
              {StatusOrder.IN_PROCESSING}
            </S.ButtonStatus>
          </S.Item>
          <S.Item>
            <S.ButtonStatus
              type={'button'}
              isActive={valueMainButton === StatusOrder.DONE}
              onClick={onChangeValueMainButton(StatusOrder.DONE)}>
              {StatusOrder.DONE}
            </S.ButtonStatus>
          </S.Item>
        </S.List>
      </AnimationShow>
    </S.SelectStatus>
  );
};
