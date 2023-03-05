import styled from 'styled-components';
import { ListLinks } from '../../../../actions/list-links';

const AdminEditPerson = styled.div``;

const Title = styled.h2`
  margin-bottom: 48px;
  font: var(--h1);
  color: var(--black);
`;

const Links = styled(ListLinks)`
  margin-bottom: 32px;
`;

export { AdminEditPerson, Title, Links };
