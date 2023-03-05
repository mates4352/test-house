import styled, { css } from 'styled-components';
import icon from './../../../../../../assets/images/icons/cheked-square.svg';

type InputCheckboxSquareType = {
  isChecked: boolean;
};

const InputCheckbox = styled.input`
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid var(--black);
  border-radius: 3px;
  cursor: pointer;
  transition: border-color 300ms ease;
  -moz-appearance: none;
  -webkit-appearance: none;

  &:checked {
    width: 18px;
    height: 18px;
    border: 1px solid transparent !important;
    background: url(${icon}) no-repeat center center/100%;
  }
`;

const Label = styled.label`
  font: var(--text-16);
  color: var(--black);
  transition: color 300ms ease;
  cursor: pointer;
`;

const InputCheckboxSquare = styled.div<InputCheckboxSquareType>`
  display: grid;
  grid-template-columns: 1fr var(--grid-min-max);
  align-items: center;
  padding: 8px 16px;
  transition: background-color 300ms ease;

  &:hover {
    background-color: var(--alice-blue);
  }

  ${props =>
    props.isChecked &&
    css`
      ${Label} {
        color: var(--deep-blue);
      }

      ${InputCheckbox} {
        border-color: var(--deep-blue);
      }
    `}
`;

export { InputCheckboxSquare, InputCheckbox, Label };
