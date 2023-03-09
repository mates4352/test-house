import styled from 'styled-components';
import { IconSend } from '../../../../icons/Icon-send';
import { IconAttachFile } from '../../../../icons/Icon-attach-file';

const FormChat = styled.form`
  position: relative;
`;

const Wrap = styled.div`
  position: relative;
  overflow: hidden;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 64px;
  height: 64px;
  padding: 24px 104px 24px 24px;
  font: var(--text-16);
  color: var(--black);
  background-color: var(--white);
  border-radius: 16px;
  border: none;
  resize: none;
  overflow: hidden;
  transition: height 200ms ease;

  &::placeholder {
    color: var(--silver);
  }
`;

const ButtonWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);

  display: grid;
  grid-template-columns: repeat(2, var(--grid-min-max));
  align-items: center;
  column-gap: 12px;
`;

const ButtonSend = styled.button``;

const Icon = styled(IconSend)`
  width: 32px;
  height: 32px;
`;

const ButtonFile = styled.button``;

export { FormChat, Wrap, Textarea, ButtonWrap, ButtonSend, Icon };
