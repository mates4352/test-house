import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuDesktop = styled.nav``;

const List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: var(--grid-min-max);
  column-gap: 32px;
`;

const Item = styled.li``;

const LinkElement = styled(NavLink)`
  font: var(--text-24);
  color: var(--black);
  transition: color 200ms ease;

  &:hover {
    color: var(--deep-blue);
  }

  &.active {
    color: var(--deep-blue);
  }
`;

export { MenuDesktop, List, Item, LinkElement };
