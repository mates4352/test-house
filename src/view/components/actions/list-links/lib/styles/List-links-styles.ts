import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ListLinks = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(min-content, max-content);
  column-gap: 24px;
  margin-bottom: 48px;
`;

const Item = styled.li``;

const LinkElement = styled(NavLink)<any>`
  display: block;
  position: relative;
  font-size: 22px;
  line-height: 26px;
  overflow: hidden;

  &.active {
  }

  &:hover {
  }
`;

const Line = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateX(-101%);
  width: 100%;
  height: 2px;
  background-color: rgba(2, 11, 65, 0.68);
  transition: transform 400ms ease;

  ${LinkElement}.active & {
    transform: translateX(0) !important;
  }

  ${LinkElement}:hover & {
    transform: translateX(-80%);
  }
`;

export { ListLinks, Item, LinkElement, Line };
