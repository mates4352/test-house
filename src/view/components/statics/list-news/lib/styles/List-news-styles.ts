import styled from "styled-components";
import {Link} from "react-router-dom";

const ListNews = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`

const Item = styled.li`

`

const LinkCreateNews = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 250px;
  border: 3px dashed #eaeaea;
  transition: border 150ms ease;

  &:hover {
    border: 3px dashed #999;
  }
`

export {ListNews, Item, LinkCreateNews}