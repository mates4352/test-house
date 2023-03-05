import styled from 'styled-components';

const AddTitle = styled.div``;

const AddTitleInput = styled.input`
  width: 100%;
  font: var(--text-24-semibold);
  color: var(--black);
  background-color: transparent;
  cursor: pointer;

  &::placeholder {
    color: var(--silver);
  }
`;

export { AddTitle, AddTitleInput };
