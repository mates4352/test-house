import styled from 'styled-components';
import { ListLinks } from '../../../../actions/list-links';
import { CustomButtonBack } from '../../../../actions/custom-button-back';

const AdminEditPerson = styled.div``;

const ButtonBack = styled(CustomButtonBack)`
  margin-bottom: 32px;
`;

const Title = styled.h2`
  margin-bottom: 48px;
  font: var(--h1);
  color: var(--black);
`;

const Links = styled(ListLinks)`
  margin-bottom: 32px;
`;

export { AdminEditPerson, ButtonBack, Title, Links };
