import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TitleAuth } from '../../../../statics/titleAuth';

const PhoneCode = styled.div`
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

export { PhoneCode, Title, LinkElement };
