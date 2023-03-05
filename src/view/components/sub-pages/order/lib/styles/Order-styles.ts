import styled from 'styled-components';
import { QuestionText } from '../../../../statics/question-text';
import { Status } from '../../../../statics/status';
import { CustomButton } from '../../../../actions/custom-button';

const Order = styled.section``;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr var(--grid-min-max);
  align-items: start;
  max-width: 820px;
  row-gap: 32px;
  margin-bottom: 40px;
  grid-template-areas:
    'Title StatusQuestion'
    'Text Text';
`;

const Title = styled.h2`
  grid-area: Title;
  font: var(--h1);
  color: var(--black);
`;

const StatusQuestion = styled(Status)`
  grid-area: StatusQuestion;
  align-self: end;
`;

const Text = styled(QuestionText)`
  grid-area: Text;
`;

const ButtonDeleteText = styled(CustomButton)`
  width: 398px;
  margin-bottom: 112px;
`;

export { Order, Wrap, Title, StatusQuestion, Text, ButtonDeleteText };
