import styled from 'styled-components';
import { QuestionText } from '../../../../statics/question-text';
import { SelectStatus } from '../../../../actions/select-status';

const AdminOrderChat = styled.div``;

const Title = styled.h2`
  margin-bottom: 48px;
  font: var(--h1);
  color: var(--black);
`;

const SelectStatusOrder = styled(SelectStatus)`
  margin-bottom: 16px;
`;

const Text = styled(QuestionText)`
  max-width: 819px;
  margin-bottom: 112px;
`;

export { AdminOrderChat, Title, SelectStatusOrder, Text };
