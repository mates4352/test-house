import styled from 'styled-components';
import { Pagination } from '../../../../actions/pagination';
import { ListCardsDirectory } from '../../../../statics/list-cards-directory';

const Contacts = styled.section``;

const Title = styled.h2`
  margin-bottom: 32px;
  font: var(--h1);
  color: var(--black);
`;

const ListCard = styled(ListCardsDirectory)`
  margin-bottom: 48px;
`;

const PaginationContacts = styled(Pagination)`
  justify-content: center;
`;

export { Contacts, Title, ListCard, PaginationContacts };
