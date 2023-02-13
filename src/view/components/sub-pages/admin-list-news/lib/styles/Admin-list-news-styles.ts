import styled from "styled-components";
import {ListNews} from "../../../../statics/list-news";

const AdminListNews = styled.div`
  
`

const List = styled(ListNews)`
  margin-bottom: 32px;
`

const Button = styled.button`
  display: block;
  padding: 12px 8px;
  margin: 0 auto;
  background-color: bisque;
  border-radius: 8px;
  transition: background-color 300ms ease;

  &:hover {
    background-color: #ffdb9c;
  }
`

export {AdminListNews, List, Button}
