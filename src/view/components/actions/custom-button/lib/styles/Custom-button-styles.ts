import styled, { css } from 'styled-components';

type buttonType = {
  property: 'common' | 'outlined';
};

const CustomButton = styled.button<any & buttonType>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 12px;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: background-color 300ms ease, color 250ms ease,
    border-color 300ms ease;

  ${props =>
    props.property === 'common' &&
    css`
      color: var(--white);
      background-color: var(--deep-blue);
    `}

  ${props =>
    props.property === 'outlined' &&
    css`
      color: var(--deep-blue);
      background-color: transparent;
      border: 1px solid var(--deep-blue);
    `}

  &:hover {
    color: var(--white);
    background-color: var(--bright-blue);
    border: 1px solid transparent;
  }

  &:disabled {
    color: var(--silver);
    background-color: var(--zircon);
    border: 1px solid transparent;
    pointer-events: none;
  }
`;
export { CustomButton };
