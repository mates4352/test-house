import styled, { css } from 'styled-components';

type MessageType = {
  isUserAdmin: 'user' | 'admin';
};

const Chat = styled.section``;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;

  box-shadow: 0 1px 3px #afafaf;
`;

const Title = styled.h2`
  font-size: 20px;
`;

const User = styled.div`
  font-size: 20px;
`;

const Admin = styled.div`
  font-size: 20px;
`;

const Content = styled.ul`
  width: 99%;
  height: 400px;
  margin: 0 auto;
  padding: 24px;
  overflow: auto;
  border: 1px solid #d9d9d9;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a0b7ff;
    border-radius: 4px;

    &:active {
      background-color: #6187ff;
    }
  }
`;

const Item = styled.li`
  display: flex;
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: unset;
  }
`;

const Message = styled.article<MessageType>`
  max-width: 80%;
  padding: 12px;
  border-radius: 12px;

  ${props =>
    props.isUserAdmin === 'user' &&
    css`
      justify-content: flex-start;
      background-color: #76caff;
    `}

  ${props =>
    props.isUserAdmin === 'admin' &&
    css`
      justify-content: flex-end;
      margin-left: auto;
      background-color: #acbaff;
    `}
`;

export { Message, Item, Content, Header, Title, User, Chat, Admin };
