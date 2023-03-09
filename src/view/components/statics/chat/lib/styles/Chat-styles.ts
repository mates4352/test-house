import styled, { css } from 'styled-components';
import { FormChat } from '../../../../forms/form-chat';
import { CustomButtonBack } from '../../../../actions/custom-button-back';

type ItemType = {
  isLength: boolean;
};

type MessageType = {
  isUserAdmin: 'user' | 'admin';
};

const Chat = styled.section``;

const Title = styled.h2`
  margin-bottom: 32px;
  font: var(--h1);
  color: var(--black);
`;

const Content = styled.ul`
  position: relative;
  margin: 0 auto;
  padding: 48px 10px 48px 80px;
  background-color: var(--blue);
  border-radius: 16px;
`;

const List = styled.ul`
  padding-right: 70px;
  overflow: auto;
  height: 400px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--black-3);
    border-radius: 3px;

    &:active {
      background-color: var(--deep-blue);
    }
  }
`;

const Item = styled.li<ItemType>`
  display: flex;
  margin-bottom: 46px;

  ${props =>
    props.isLength &&
    css`
      margin-bottom: 8px;
    `}

  &:last-of-type {
    margin-bottom: unset;
  }
`;

const Message = styled.article<MessageType>`
  position: relative;
  max-width: 609px;
  padding: 8px 57px 15px 26px;
  word-break: break-word;
  border-radius: 24px;

  ${props =>
    props.isUserAdmin === 'user' &&
    css`
      justify-content: flex-start;
      background-color: var(--white);
      border-bottom-left-radius: 8px;
    `}

  ${props =>
    props.isUserAdmin === 'admin' &&
    css`
      justify-content: flex-end;
      margin-left: auto;
      background-color: var(--alice-blue);
      border-bottom-right-radius: 8px;
    `}
`;

const Text = styled.p`
  font: var(--text-16);
  color: var(--black);
`;

const Image = styled.img`
  width: 240px;
  margin-top: 8px;
`;

const Time = styled.time`
  position: absolute;
  bottom: 8px;
  right: 20px;
  font: var(--text-12);
  color: var(--dark-grey);
`;

const InputMessage = styled(FormChat)`
  margin-top: 10px;
  padding-right: 70px;
`;

export {
  Message,
  Text,
  Image,
  Time,
  Content,
  List,
  Item,
  Title,
  Chat,
  InputMessage,
};
