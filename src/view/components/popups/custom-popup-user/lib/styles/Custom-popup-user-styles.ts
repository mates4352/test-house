import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const CustomPopupUser = styled.div`
  min-width: 216px;
  min-height: 172px;
  background-color: #fff;
  border-radius: 8px;
`;

const WrapName = styled.div`
  padding: 24px 24px 14px;
  border-bottom: 1px solid var(--light-grey);
`;

const Name = styled.p`
  font: var(--text-16);
  color: var(--black);
`;

const Type = styled.div`
  font: var(--text-12);
  color: var(--silver);
`;

const List = styled.ul`
  display: grid;
  grid-auto-rows: var(--grid-min-max);
  row-gap: 18px;
  padding: 16px 24px 24px;
`;

const Item = styled.li``;

const LinkElement = styled(NavLink)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: var(--grid-min-max);
  align-items: center;
  column-gap: 8px;
  font: var(--text-16);
  color: var(--black);
  transition: color 200ms ease;

  &:hover {
    color: var(--deep-blue);
  }

  &.active {
    color: var(--deep-blue);
  }
`;

export { WrapName, Name, Type, List, Item, LinkElement, CustomPopupUser };
