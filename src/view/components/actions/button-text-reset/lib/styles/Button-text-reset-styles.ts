import styled from 'styled-components';

const ButtonTextReset = styled.button`
  position: relative;
  font: var(--text-16);
  color: var(--black);
  transition: color 300ms ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
  }

  &:hover {
    color: var(--deep-blue);
  }
`;

export { ButtonTextReset };
