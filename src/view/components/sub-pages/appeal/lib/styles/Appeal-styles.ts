import styled from 'styled-components';

const Appeal = styled.div``;

const Title = styled.h2`
  margin-bottom: 32px;
  font: var(--h1);
  color: var(--black);
`;

const List = styled.ul`
  display: grid;
  grid-auto-rows: var(--grid-min-max);
  row-gap: 24px;
`;

export { Appeal, Title, List };
