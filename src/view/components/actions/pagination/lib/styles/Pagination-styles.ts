import styled, { css } from 'styled-components';
import { IconArrow } from '../../../../icons/Icon-arrow';

type PaginationButtonType = {
  currentPage?: boolean;
  margin?: string;
};

const Pagination = styled.div`
  display: grid;
  grid-template-columns: repeat(2, var(--grid-min-max));
  column-gap: 30px;
  align-items: center;
`;

const Wrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: var(--grid-min-max);
  align-items: center;
`;

const List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: var(--grid-min-max);
  column-gap: 4px;
  margin: 0 4px;
`;

const Item = styled.li``;

const PaginationButton = styled.button<PaginationButtonType>`
  min-width: 35px;
  height: 35px;
  font: var(--text-16);
  color: var(--black);
  transition: color 300ms ease;

  ${props =>
    props.currentPage &&
    css`
      color: var(--deep-blue);
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  
  &:disabled {
    color: var(--light-grey);
    pointer-events: none;
  }

  &:hover {
    color: var(--deep-blue);
  }
`;

const PaginationButtonPrev = styled(PaginationButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  transition: transform 300ms ease;

  &:disabled {
    cursor: not-allowed;
  }

  &:active {
    transform: translateX(-5px);
  }
`;

const IconArrowPrev = styled(IconArrow)`
  transform: rotate(90deg);
  width: 16px;
  height: 16px;
`;

const PaginationButtonNext = styled(PaginationButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  transition: transform 300ms ease;

  &:disabled {
    cursor: not-allowed;
  }

  &:active {
    transform: translateX(5px);
  }
`;

const IconArrowNext = styled(IconArrow)`
  transform: rotate(-90deg);
  width: 16px;
  height: 16px;
`;

const Point = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
`;

export {
  Pagination,
  Wrap,
  PaginationButtonPrev,
  IconArrowPrev,
  PaginationButtonNext,
  IconArrowNext,
  List,
  Item,
  PaginationButton,
  Point,
};
