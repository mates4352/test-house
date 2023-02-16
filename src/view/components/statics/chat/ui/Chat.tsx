import React, { FC } from 'react';
import * as S from '../lib/styles/Chat-styles';
import { FormChat } from '../../../forms/form-chat';
import { useChat } from '../lib/hooks/useChat';

type ChatType = {};

export const Chat: FC<ChatType> = ({}) => {
  const [refContent] = useChat();

  const ArrayMessage: { id: string; status: 'admin' | 'user'; text: string }[] =
    [
      {
        id: '1',
        status: 'user',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deserunt enim ex fugiat magnam nulla quibusdam quidem quisquam quo.',
      },

      {
        id: '2',
        status: 'admin',
        text: 'Lorem ipsum dolor sit amet',
      },

      {
        id: '3',
        status: 'admin',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deserunt enim ex fugiat magnam nulla quibusdam quidem quisquam quo.',
      },

      {
        id: '4',
        status: 'user',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deserunt enim ex fugiat magnam nulla quibusdam quidem quisquam quo.',
      },

      {
        id: '5',
        status: 'admin',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deserunt enim ex fugiat magnam nulla quibusdam quidem quisquam quo.',
      },

      {
        id: '6',
        status: 'user',
        text: 'Lorem ipsum dolor sit amet',
      },

      {
        id: '7',
        status: 'admin',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deserunt enim ex fugiat magnam nulla quibusdam quidem quisquam quo.',
      },

      {
        id: '8',
        status: 'user',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deserunt enim ex fugiat magnam nulla quibusdam quidem quisquam quo.',
      },

      {
        id: '9',
        status: 'admin',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deserunt enim ex fugiat magnam nulla quibusdam quidem quisquam quo.',
      },
    ];

  return (
    <S.Chat>
      <S.Header>
        <S.Admin>Admin</S.Admin>
        <S.Title>Chat</S.Title>
        <S.User>Максим</S.User>
      </S.Header>

      <S.Content ref={refContent}>
        {ArrayMessage.map(message => (
          <S.Item key={message.id}>
            <S.Message isUserAdmin={message.status}>{message.text}</S.Message>
          </S.Item>
        ))}
      </S.Content>

      <FormChat />
    </S.Chat>
  );
};
