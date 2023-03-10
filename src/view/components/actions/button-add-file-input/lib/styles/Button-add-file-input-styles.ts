import styled from 'styled-components';
import { IconAttachFile } from '../../../../icons/Icon-attach-file';

const ButtonAddFileInput = styled.button`
  &:active {
    transform: scale(0.97);
  }
`;

const IconFile = styled(IconAttachFile)`
  width: 32px;
  height: 32px;
`;

const InputFile = styled.input`
  position: fixed;
  left: -1px;
  top: -1px;
  height: 0;
  width: 0;
  opacity: 0;
  cursor: none;
  background: none;
  font-size: 0;
  visibility: hidden;
`;

export { ButtonAddFileInput, IconFile, InputFile };
