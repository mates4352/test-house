import styled, { css } from 'styled-components';

const Wrap = styled.div`
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
  row-gap: 12px;
  width: 100%;
`;
const Textarea = styled.textarea<any>`
  width: 100%;
  min-height: 120px;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #a6d7ff;
  overflow: hidden;
  resize: none;

  ${props =>
    props.isError &&
    css`
      border: 2px solid red;
    `}
  ${props =>
    props.isValid &&
    css`
      border: 2px solid green;
    `}
`;

export { Wrap, Textarea };
