import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = styled.div`
  padding: 12px;
  background-color: bisque;
`;

const List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(min-content, max-content);
  column-gap: 24px;
`;

const Item = styled.li``;

const LinkIcon = styled(Link)`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #999;
`;

export { Footer, List, Item, LinkIcon };
