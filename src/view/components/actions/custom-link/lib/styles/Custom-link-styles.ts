import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type CustomLinkType = {
  color?: string;
};

const CustomLink = styled(Link)<CustomLinkType>`
  font: var(--text-16);
  color: var(--deep-blue);
  transition: color 300ms ease;

  &:hover {
    color: var(--bright-blue);
  }
`;

export { CustomLink };
