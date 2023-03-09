import styled from 'styled-components';
import { IconPlus } from '../../../../icons/Icon-plus';

const CustomButtonPlus = styled.button`
  display: grid;
  grid-template-columns: repeat(2, var(--grid-min-max));
  align-items: center;
  column-gap: 4px;
  padding: 14px 24px;
  font: var(--text-16-semibold);
  color: var(--deep-blue);
  border: 1px solid var(--deep-blue);
  border-radius: 56px;
  transition: color 300ms ease, border-color 300ms ease,
    transform 350ms cubic-bezier(0, 1.64, 0, 1.9);

  &:hover {
    color: var(--bright-blue);
    border-color: var(--bright-blue);
  }

  &:active {
    transform: scale(0.97);
  }
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

const Plus = styled(IconPlus)`
  transform: translateY(2px);
  width: 15px;
  height: 15px;
`;

export { CustomButtonPlus, InputFile, Plus };
