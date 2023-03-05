import React, { FC } from 'react';
import * as S from '../lib/styles/Add-text-styles';
import { useAddText } from '../lib/hooks/useAddText';

type AddTextType = {
  placeholder: string;
  onCallback: (value: string) => void;
};

export const AddText: FC<AddTextType> = ({
  placeholder,
  onCallback,
  ...props
}) => {
  const [inputValue, textareaRef, onChangeTextarea] = useAddText(onCallback);
  return (
    <S.AddText {...props}>
      <S.AddTextInput
        ref={textareaRef}
        value={inputValue}
        placeholder={placeholder}
        onChange={onChangeTextarea}
      />
    </S.AddText>
  );
};
