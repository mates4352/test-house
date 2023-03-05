import styled from 'styled-components';
import { Container } from '../../../../../global-styled-components/global-styled-components';

const Footer = styled.div`
  padding: 64px 130px 64px 0;
  background-color: var(--blue);
`;

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrap = styled.div``;

const Title = styled.h2`
  margin-bottom: 40px;
  font: var(--text-24-semibold);
  color: var(--deep-blue);
`;

const Text = styled.p`
  margin-bottom: 43px;
  font: var(--text-16);
  color: var(--dark-grey);
`;

const List = styled.ul`
  display: grid;
  grid-auto-rows: var(--grid-min-max);
  row-gap: 8px;
`;

const Item = styled.li``;

const Link = styled.a`
  font: var(--text-16);
  color: var(--dark-grey);
  transition: color 300ms ease;

  &:hover {
    color: var(--deep-blue);
  }
`;

const ListSchedule = styled.ul`
  display: grid;
  grid-auto-rows: var(--grid-min-max);
  row-gap: 40px;
`;

const ItemSchedule = styled.li``;

const SubTitle = styled.h3`
  margin-bottom: 16px;
  font: var(--text-16);
  color: var(--black-3);
`;

const Dl = styled.dl`
  display: grid;
  grid-auto-rows: var(--grid-min-max);
  row-gap: 16px;
  font: var(--text-16);
  color: var(--dark-grey);
`;

const WrapDl = styled.div`
  display: flex;
  align-items: center;
`;

const Dt = styled.dt`
  width: 212px;
`;

const Dd = styled.dd``;

export {
  Footer,
  FooterContainer,
  Wrap,
  Title,
  SubTitle,
  Text,
  List,
  Item,
  Link,
  ListSchedule,
  ItemSchedule,
  WrapDl,
  Dl,
  Dt,
  Dd,
};
