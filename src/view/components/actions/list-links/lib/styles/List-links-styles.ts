import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ListLinks = styled.ul`
  position: relative;
  display: inline-grid;
  grid-auto-flow: column;
  grid-auto-columns: var(--grid-min-max);
  column-gap: 24px;
  margin-bottom: 48px;
  border-bottom: 1px solid var(--light-grey);
`;

const Item = styled.li``;

const LinkElement = styled(NavLink)<any>`
  display: block;
  padding-bottom: 10px;
  font: var(--text-16-semibold);
  color: var(--black);
`;

const Line = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: var(--black);
  transition: left 300ms ease, width 450ms ease;
`;

export { ListLinks, Item, LinkElement, Line };
