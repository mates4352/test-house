import styled from 'styled-components';

const AddText = styled.div``;

const AddTextInput = styled.textarea`
  max-width: 778px;
  width: 100%;
  font: var(--text-16);
  color: var(--black);
  background-color: transparent;
  border: none;
  cursor: pointer;
  resize: none;
  overflow: hidden;

  &::placeholder {
    color: var(--silver);
  }
`;

export { AddText, AddTextInput };
