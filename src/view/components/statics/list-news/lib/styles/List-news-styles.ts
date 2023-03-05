import styled from 'styled-components';

const ListNews = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

const Item = styled.li``;

export { ListNews, Item };
