import React, {FC} from 'react';
import * as S from "../lib/styles/Custom-input-search-styles";
import {useDebounce} from "../../../../../core/utils/hooks/useDebounce";

type CustomInputSearchType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  onSearchInputValue: (value: string) => void
};

export const CustomInputSearch: FC<CustomInputSearchType> = ({
  onSearchInputValue,
  ...props
}) => {
  const [value, onChangeInputValue] = useDebounce('', 500, () => onSearchInputValue(value))

  return (
    <S.CustomInputSearch {...props} value={value} onChange={onChangeInputValue}/>
  );
};
