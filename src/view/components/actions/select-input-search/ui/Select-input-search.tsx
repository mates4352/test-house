import React, { FC } from 'react';
import * as S from '../lib/styles/Select-input-search-styles';
import { useSelectInputSearch } from '../lib/hooks/useSelectInputSearch';

type SelectInputSearchType = {
  placeholder: string;
  onCallback: (value: string) => void;
};

export const SelectInputSearch: FC<SelectInputSearchType> = ({
  placeholder,
  onCallback,
  ...props
}) => {
  const [inputValue, onChangeValueInput] = useSelectInputSearch(onCallback);

  return (
    <S.SelectInputSearch {...props}>
      <S.InputSearch
        type={'text'}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeValueInput}
      />

      <S.Icon />
    </S.SelectInputSearch>
  );
};
