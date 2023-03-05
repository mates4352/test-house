import styled from 'styled-components';
import { CardImage } from '../../../../statics/card-image';
import { CustomButtonBack } from '../../../../actions/custom-button-back';

type CardType = {
  bg?: string;
};

const NewsInfo = styled.section``;

const ButtonBack = styled(CustomButtonBack)`
  margin-bottom: 32px;
`;

const Card = styled(CardImage)<CardType>`
  max-width: 924px;
  height: 450px;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font: var(--text-24-semibold);
  color: var(--black);
`;

const Date = styled.p`
  margin-bottom: 41px;
`;

const Text = styled.p`
  margin-bottom: 24px;
  font: var(--text-16);
  color: var(--dark-grey);

  &:last-of-type {
    margin-bottom: unset;
  }
`;

export { NewsInfo, ButtonBack, Card, Title, Date, Text };
