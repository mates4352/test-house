import React, { FC } from 'react';
import * as S from '../lib/styles/Add-title-styles';
import { useAddTitle } from '../lib/hooks/useAddTitle';

type AddTitleType = {
  placeholder: string;
  onCallback: (value: string) => void;
};

export const AddTitle: FC<AddTitleType> = ({
  placeholder,
  onCallback,
  ...props
}) => {
  const [inputValue, onChangeInputValue] = useAddTitle(onCallback);

  return (
    <S.AddTitle {...props}>
      <S.AddTitleInput
        type={'text'}
        value={inputValue}
        placeholder={placeholder}
        onChange={onChangeInputValue}
      />
    </S.AddTitle>
  );
};
