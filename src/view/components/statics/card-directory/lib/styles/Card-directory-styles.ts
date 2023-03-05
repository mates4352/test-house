import styled from 'styled-components';
import { CustomLink } from '../../../../actions/custom-link';

const CardDirectory = styled.article`
  width: 100%;
  height: 364px;
  background-color: var(--white);
  border-radius: 24px;
  padding: 32px;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  font: var(--text-18-semibold);
  color: var(--black);
`;

const List = styled.ul`
  display: grid;
  grid-auto-rows: var(--grid-min-max);
  row-gap: 16px;
  padding-right: 6px;
  height: 250px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--light-grey);
    border-radius: 20px;

    &:active {
      background-color: var(--deep-blue);
    }
  }
`;

const Item = styled.li``;

const Link = styled(CustomLink)`
  color: var(--black);

  &:hover {
    color: var(--deep-blue);
  }
`;

export { CardDirectory, Title, List, Item, Link };
