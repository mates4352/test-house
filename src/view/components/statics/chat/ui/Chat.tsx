import React, { FC } from 'react';
import * as S from '../lib/styles/Chat-styles';
import { useChat } from '../lib/hooks/useChat';

type ChatType = {};

export const Chat: FC<ChatType> = ({}) => {
  const [refList, arrayMessage, onSendMessage] = useChat();

  return (
    <S.Chat>
      <S.Title>Переписка по обращению</S.Title>

      <S.Content>
        <S.List ref={refList}>
          {arrayMessage.map(message => (
            <S.Item
              key={message.id}
              isLength={message.text.toString().length <= 78}>
              <S.Message isUserAdmin={message.status}>
                <S.Text>{message.text}</S.Text>
                <S.Time>{message.time}</S.Time>
              </S.Message>
            </S.Item>
          ))}
        </S.List>

        <S.InputMessage onCallback={onSendMessage} />
      </S.Content>
    </S.Chat>
  );
};
