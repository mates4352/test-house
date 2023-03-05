import styled from 'styled-components';

const SectionHomeOrders = styled.section``;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const WrapButton = styled.div`
  display: grid;
  grid-template-columns: repeat(2, var(--grid-min-max));
  align-items: center;
  column-gap: 24px;
`;

const Title = styled.h2`
  font: var(--h1);
  color: var(--black);
`;

export { SectionHomeOrders, Wrap, WrapButton, Title };
