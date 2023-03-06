import styled from 'styled-components';
import { IconSend } from '../../../../icons/Icon-send';

const FormChat = styled.form`
  position: relative;
`;

const Wrap = styled.div`
  position: relative;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 64px;
  height: 64px;
  padding: 24px 68px 24px 24px;
  font: var(--text-16);
  color: var(--black);
  background-color: var(--white);
  border-radius: 16px;
  border: none;
  resize: none;
  overflow: hidden;

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

export { FormChat, Wrap, Textarea, ButtonSend, Icon };
