import styled, { css } from 'styled-components';

const Wrap = styled.div`
  display: grid;
  grid-auto-rows: var(--grid-min-max);
  width: 100%;
`;

const Textarea = styled.textarea<any>`
  width: 100%;
  min-height: 240px;
  padding: 24px;
  font: var(--text-16);
  color: var(--black);
  background-color: var(--white);
  border: 1px solid var(--light-grey);
  border-radius: 16px;
  overflow: hidden;
  resize: none;
  transition: border-color 300ms ease;

  ${props =>
    props.isActive &&
    css`
      border: 1px solid var(--black);
    `}

  ${props =>
    props.isError &&
    css`
      border: 1px solid var(--error) !important;
    `}
  
  ${props =>
    props.isValid &&
    css`
      border: 1px solid var(--success) !important;
    `}
  
  &::placeholder {
    color: var(--silver);
  }

  &:hover {
    border: 1px solid var(--black);
  }
`;

export { Wrap, Textarea };
