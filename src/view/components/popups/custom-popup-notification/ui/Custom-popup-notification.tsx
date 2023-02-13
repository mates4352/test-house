import React, {FC} from 'react';
import * as S from "../lib/styles/Custom-popup-notification-styles";

type CustomPopupNotificationType = {
  ref: any
};

export const CustomPopupNotification: FC<CustomPopupNotificationType> = React.forwardRef((props, ref: any) => {

  return (
    <S.CustomPopupNotification {...props} ref={ref}>
      <S.Wrap>
        <S.Title>
          Уведомления
        </S.Title>

        <S.Count>
          кол-во 5
        </S.Count>
      </S.Wrap>

      <S.Content>
        <S.List>
          <S.Item>
            <S.Notification type={'button'}>
              уведомление
            </S.Notification>
          </S.Item>

          <S.Item>
            <S.Notification type={'button'}>
              уведомление
            </S.Notification>
          </S.Item>

          <S.Item>
            <S.Notification type={'button'}>
              уведомление
            </S.Notification>
          </S.Item>

          <S.Item>
            <S.Notification type={'button'}>
              уведомление
            </S.Notification>
          </S.Item>

          <S.Item>
            <S.Notification type={'button'}>
              уведомление
            </S.Notification>
          </S.Item>
        </S.List>
      </S.Content>
    </S.CustomPopupNotification>
  );
})
