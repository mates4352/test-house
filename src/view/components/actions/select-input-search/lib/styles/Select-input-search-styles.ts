import styled from 'styled-components';
import { IconSearch } from '../../../../icons/Icon-search';

const SelectInputSearch = styled.div`
  position: relative;
`;

const InputSearch = styled.input`
  width: 100%;
  font: var(--text-16);
  color: var(--black);
  padding-bottom: 4px;
  border-bottom: 1px solid var(--light-grey);
  transition: border-color 300ms ease;

  &:hover {
    border-color: 1px solid var(--black);
  }

  &::placeholder {
    color: var(--silver);
  }
`;

const Icon = styled(IconSearch)`
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
`;

export { SelectInputSearch, InputSearch, Icon };
