import styled from "styled-components";
import {NavLink} from "react-router-dom";

const MenuDesktop = styled.nav`

`

const List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(min-content, max-content);
  column-gap: 24px;
`

const Item = styled.li`

`

const LinkElement = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  transition: color 200ms ease;
  
  &:hover {
    color: #6780ff;
  }
  
  &.active {
    color: #6780ff;
  }
`

export {MenuDesktop, List, Item, LinkElement}