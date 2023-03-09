import React, { FC } from 'react';
import * as S from '../lib/styles/Chat-styles';
import { useChat } from '../lib/hooks/useChat';

type ChatType = {};

export const Chat: FC<ChatType> = ({}) => {
  const [refList, arrayMessage, onSendMessage, marginMessage] = useChat();

  return (
    <S.Chat>
      <S.Title>Переписка по обращению</S.Title>

      <S.Content>
        <S.List ref={refList}>
          {arrayMessage.map((message, index) => (
            <S.Item
              key={message.id}
              isLength={marginMessage(index)}>
              <S.Message isUserAdmin={message.status}>
                <S.Text>{message.text}</S.Text>
                {message.image && (
                  <S.Image
                    src={message.image}
                    alt={''}
                  />
                )}
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
