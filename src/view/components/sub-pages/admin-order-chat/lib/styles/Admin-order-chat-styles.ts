import styled from 'styled-components';
import { QuestionText } from '../../../../statics/question-text';
import { SelectStatus } from '../../../../actions/select-status';
import { CustomButtonBack } from '../../../../actions/custom-button-back';

const AdminOrderChat = styled.div``;

const ButtonBack = styled(CustomButtonBack)`
  margin-bottom: 32px;
`;

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

export { AdminOrderChat, ButtonBack, Title, SelectStatusOrder, Text };
