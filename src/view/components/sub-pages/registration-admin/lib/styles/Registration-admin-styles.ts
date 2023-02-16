import styled from 'styled-components';
import { TitleAuth } from '../../../../statics/titleAuth';
import { Link } from 'react-router-dom';

const RegistrationAdmin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(TitleAuth)`
  margin-bottom: 24px;
`;

const LinkElement = styled(Link)`
  margin-top: 8px;
`;
export { RegistrationAdmin, Title, LinkElement };
