import styled from 'styled-components';
import { IconArrow } from '../../../../icons/Icon-arrow';

const CustomButtonBack = styled.button`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: var(--grid-min-max);
  align-items: center;
  column-gap: 4px;
  font: var(--text-16);
  color: var(--deep-blue);
  transition: color 300ms ease;

  &:hover {
    color: var(--bright-blue);
  }
`;

const Arrow = styled(IconArrow)`
  width: 16px;
  height: 16px;
  transform: rotate(90deg);
`;

export { CustomButtonBack, Arrow };
