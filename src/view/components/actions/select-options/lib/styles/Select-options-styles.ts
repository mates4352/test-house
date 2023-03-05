import styled, { css } from 'styled-components';
import { IconArrow } from '../../../../icons/Icon-arrow';
import { IconCheck } from '../../../../icons/Icon-check';

type ButtonType = {
  statusOpen: boolean;
};

const SelectOptions = styled.div`
  position: relative;
`;

const SelectButtonOpen = styled.button<ButtonType>`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: var(--grid-min-max);
  align-items: center;
  column-gap: 28px;
  min-width: 80px;
  padding: 7px 12px;
  font: var(--text-16);
  color: var(--black);
  background-color: var(--white);
  border: 1px solid var(--light-grey);
  border-radius: 8px;
  transition: color 300ms ease, border-color 300ms ease;

  &:hover {
    color: var(--deep-blue);
    border-color: var(--deep-blue);
  }

  ${props =>
    props.statusOpen &&
    css`
      color: var(--deep-blue);
      border-color: var(--deep-blue);
      ${Arrow} {
        transform: rotate(-180deg);
      }
    `}
`;

const Arrow = styled(IconArrow)`
  width: 16px;
  height: 16px;
  transition: transform 350ms ease;
`;

const Select = styled.ul`
  position: absolute;
  top: 43px;
  left: 0;
  width: 100%;
  padding: 8px 0;
  background-color: var(--white);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

const SelectItem = styled.li``;

const SelectButton = styled.button`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: var(--grid-min-max);
  align-items: center;
  column-gap: 14px;
  width: 100%;
  padding: 17px 16px;
  font: var(--text-14);
  transition: background-color 150ms ease, color 400ms;

  &:hover {
    background-color: var(--zircon);
    color: var(--deep-blue);
  }
`;

const Check = styled(IconCheck)`
  width: 16px;
  height: 16px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 300ms ease, opacity 300ms ease;

  ${SelectButton}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export {
  SelectOptions,
  SelectButtonOpen,
  Arrow,
  Select,
  SelectItem,
  SelectButton,
  Check,
};
