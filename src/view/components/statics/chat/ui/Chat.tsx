import React, {FC} from 'react';
import {ChatStyles} from "../lib/styles/Chat-styles";
import {FormChat} from "../../../forms/form-chat";
import {useChat} from "../lib/hooks/useChat";

type ChatType = {};

export const Chat: FC<ChatType> = ({}) => {
  const {Chat, Header, Title, User, Admin, Content, Item, Message} = ChatStyles
  const [refContent] = useChat()

  const ArrayMessage: { id: string, status: 'admin' | 'user', text: string }[] = [
    {
      id: '1',
      status: 'user',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deserunt enim ex fugiat magnam nulla quibusdam quidem quisquam quo.'
    },

    {
      id: '2',
      status: 'admin',
      text: 'Lorem ipsum dolor sit amet'
    },

    {
      id: '3',
      status: 'admin',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deserunt enim ex fugiat magnam nulla quibusdam quidem quisquam quo.'
    },

    {
      id: '4',
      status: 'user',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deserunt enim ex fugiat magnam nulla quibusdam quidem quisquam quo.'
    },

    {
      id: '5',
      status: 'admin',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deserunt enim ex fugiat magnam nulla quibusdam quidem quisquam quo.'
    },

    {
      id: '6',
      status: 'user',
      text: 'Lorem ipsum dolor sit amet'
    },

    {
      id: '7',
      status: 'admin',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deserunt enim ex fugiat magnam nulla quibusdam quidem quisquam quo.'
    },

    {
      id: '8',
      status: 'user',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deserunt enim ex fugiat magnam nulla quibusdam quidem quisquam quo.'
    },

    {
      id: '9',
      status: 'admin',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deserunt enim ex fugiat magnam nulla quibusdam quidem quisquam quo.'
    },
  ]

  return (
    <Chat>
      <Header>
        <Admin>Admin</Admin>
        <Title>Chat</Title>
        <User>Максим</User>
      </Header>

      <Content ref={refContent}>
        {ArrayMessage.map((message) =>
          <Item key={message.id}>
            <Message isUserAdmin={message.status}>
              {message.text}
            </Message>
          </Item>
        )}
      </Content>

      <FormChat/>
    </Chat>
  );
};
