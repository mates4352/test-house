import styled from "styled-components";
import {NavLink} from "react-router-dom";

const ListLinks = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(min-content, max-content);
  column-gap: 24px;
  margin-bottom: 48px;
`

const Item = styled.li`

`

const LinkElement = styled(NavLink)<any>`
  font-size: 22px;

  &.active {
    border-bottom: 1px solid #999;
  }

  &:hover {
    border-bottom: 1px solid #999;
  }
`

export {ListLinks, Item, LinkElement}