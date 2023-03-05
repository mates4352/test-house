import styled, { css } from 'styled-components';

type CustomInputStylesType = any & {
  isError?: boolean;
  isValid?: boolean;
  isActive?: boolean;
};

const Wrap = styled.div`
  display: grid;
  grid-auto-rows: var(--grid-min-max);
  width: 100%;
`;

const CustomInput = styled.input<CustomInputStylesType>`
  width: 100%;
  height: 100%;
  padding: 14px 12px;
  font: var(--text-16);
  color: var(--black);
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid var(--light-grey);
  transition: border 350ms ease;

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
  
  &:disabled {
    background-color: var(--cultured);
    pointer-events: none;
  }

  &:hover {
    border: 1px solid var(--black);
  }

  &::placeholder {
    color: var(--silver);
  }
`;

export { Wrap, CustomInput };
