import styled from 'styled-components';
import { SelectInputSearch } from '../../../select-input-search';
import { ButtonSelect } from '../../../button-select';
import { AnimationShow } from '../../../../animation/AnimationShow';
import { InputCheckboxSquare } from '../../../input-checkbox-square';

const SelectSearch = styled.div`
  --width-button-select: 186px;
`;

const ButtonMainSelect = styled(ButtonSelect)`
  margin-bottom: 8px;
`;

const WrapAnimation = styled(AnimationShow)`
  min-width: 280px;
  max-width: max-content;
`;

const Popup = styled.div`
  min-width: 280px;
  padding: 16px 8px 8px 0;
  background-color: var(--white);
  border: 1px solid var(--light-grey);
  border-radius: 8px;
`;

const WrapInput = styled.div`
  padding: 0 16px 8px;
`;

const Input = styled(SelectInputSearch)``;

const List = styled.ul`
  max-height: 220px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--light-grey);
    border-radius: 20px;

    &:active {
      background-color: var(--deep-blue);
    }
  }
`;

const Item = styled.li``;

const InputCheckbox = styled(InputCheckboxSquare)`
  padding-left: 16px;
`;

export {
  SelectSearch,
  ButtonMainSelect,
  WrapAnimation,
  Popup,
  WrapInput,
  Input,
  List,
  Item,
  InputCheckbox,
};
