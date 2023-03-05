import styled from 'styled-components';
import { IconSend } from '../../../../icons/Icon-send';

const FormChat = styled.form`
  position: relative;
`;

const Wrap = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 64px;
  padding: 0 24px;
  font: var(--text-16);
  color: var(--black);
  background-color: var(--white);
  border-radius: 16px;

  &::placeholder {
    color: var(--silver);
  }
`;

const ButtonSend = styled.button`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
`;

const Icon = styled(IconSend)`
  width: 32px;
  height: 32px;
`;

export { FormChat, Wrap, Input, ButtonSend, Icon };
