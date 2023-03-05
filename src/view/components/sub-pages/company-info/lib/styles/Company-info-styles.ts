import styled from 'styled-components';
import { CustomButtonBack } from '../../../../actions/custom-button-back';

const CompanyInfo = styled.section``;

const ButtonBack = styled(CustomButtonBack)`
  margin-bottom: 32px;
`;

const Title = styled.h2`
  margin-bottom: 64px;
  font: var(--h1);
  color: var(--black);
`;

const List = styled.ul`
  display: grid;
  grid-auto-rows: var(--grid-min-max);
  row-gap: 40px;
`;

const Item = styled.li``;

const SubTitle = styled.h3`
  margin-bottom: 24px;
  font: var(--text-16-semibold);
  color: var(--black);
`;

const Text = styled.p`
  max-width: 780px;
  margin-bottom: 32px;
  font: var(--text-16);
  color: var(--dark-grey);
`;

export { CompanyInfo, ButtonBack, Title, List, Item, SubTitle, Text };
