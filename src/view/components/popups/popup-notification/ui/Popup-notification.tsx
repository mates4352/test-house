import React, {FC} from 'react';
import {PopupNotificationStyles} from "../lib/styles/Popup-notification-styles";

type PopupNotificationType = {
  ref: any
};

export const PopupNotification: FC<PopupNotificationType> = React.forwardRef((props, ref: any) => {
  const {PopupNotification, Wrap, Title, Count, Content, List, Item, Notification} = PopupNotificationStyles

  return (
    <PopupNotification {...props} ref={ref}>
      <Wrap>
        <Title>
          Уведомления
        </Title>

        <Count>
          кол-во 5
        </Count>
      </Wrap>

      <Content>
        <List>
          <Item>
            <Notification type={'button'}>
              уведомление
            </Notification>
          </Item>

          <Item>
            <Notification type={'button'}>
              уведомление
            </Notification>
          </Item>

          <Item>
            <Notification type={'button'}>
              уведомление
            </Notification>
          </Item>

          <Item>
            <Notification type={'button'}>
              уведомление
            </Notification>
          </Item>

          <Item>
            <Notification type={'button'}>
              уведомление
            </Notification>
          </Item>
        </List>
      </Content>
    </PopupNotification>
  );
})
