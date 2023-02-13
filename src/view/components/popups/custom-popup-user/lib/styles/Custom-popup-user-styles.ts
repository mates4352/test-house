import styled from "styled-components";
import {NavLink} from "react-router-dom";

const CustomPopupUser = styled.div`
  min-width: 120px;
  min-height: 80px;
  padding: 24px 16px;
  background-color: #fff;
  border: 1px solid bisque;
  border-radius: 8px;
`

const List = styled.ul`
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
  row-gap: 12px;
`

const Item = styled.li`

`

const LinkElement = styled(NavLink)`
  font-size: 20px;
  transition: color 300ms ease;

  &.active {
    color: yellowgreen;
  }

  &:hover {
    color: yellowgreen;
  }
`

export {List, Item, LinkElement, CustomPopupUser}