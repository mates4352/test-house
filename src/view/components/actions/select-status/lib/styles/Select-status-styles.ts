import styled, { css } from 'styled-components';
import { ButtonSelect } from '../../../button-select';

type ButtonMainStatusType = {
  isActive?: boolean;
};

type ButtonStatusType = {
  isActive?: boolean;
};

const SelectStatus = styled.div`
  position: relative;
  display: inline-block;
`;

const ButtonMainStatus = styled(ButtonSelect)<ButtonMainStatusType>`
  margin-bottom: 8px;
`;

const List = styled.ul`
  display: grid;
  grid-auto-rows: var(--grid-min-max);
  width: 100%;
  background-color: var(--white);
  border: 1px solid var(--light-grey);
  border-radius: 8px;
`;

const Item = styled.li``;

const ButtonStatus = styled.button<ButtonStatusType>`
  width: 100%;
  padding: 16px;
  font: var(--text-16);
  color: var(--black);
  text-align: left;
  transition: background-color 300ms ease;

  ${Item}:first-of-type & {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  ${Item}:last-of-type & {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:hover {
    background-color: var(--zircon);
  }

  ${props =>
    props.isActive &&
    css`
      color: var(--deep-blue);
    `}
`;

export { SelectStatus, ButtonMainStatus, List, Item, ButtonStatus };
