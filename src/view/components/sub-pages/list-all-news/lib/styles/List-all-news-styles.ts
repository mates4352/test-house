import styled from 'styled-components';
import { ListNews } from '../../../../statics/list-news';
import { Pagination } from '../../../../actions/pagination';

const ListAllNews = styled.div``;

const List = styled(ListNews)`
  margin-bottom: 48px;
`;

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
`;

const PaginationAllNews = styled(Pagination)`
  justify-content: center;
`;

export { ListAllNews, List, Button, PaginationAllNews };
