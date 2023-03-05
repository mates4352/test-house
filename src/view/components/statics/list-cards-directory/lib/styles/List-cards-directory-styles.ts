import styled from 'styled-components';

const ListCardsDirectory = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

const Item = styled.li``;

export { ListCardsDirectory, Item };
