import styled from 'styled-components';
import { CustomButtonBack } from '../../../../actions/custom-button-back';

const AdminEditModerator = styled.div``;

const ButtonBack = styled(CustomButtonBack)`
  margin-bottom: 32px;
`;

const Title = styled.h2`
  margin-bottom: 48px;
  font: var(--h1);
  color: var(--black);
`;

export { AdminEditModerator, ButtonBack, Title };
