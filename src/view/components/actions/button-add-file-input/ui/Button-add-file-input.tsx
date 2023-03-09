import React, { ChangeEvent, FC, useRef } from 'react';
import * as S from '../lib/styles/Button-add-file-input-styles';

type ButtonAddFileInputType = {
  onCallbackInput?: (e: ChangeEvent<any>) => void;
};

export const ButtonAddFileInput: FC<ButtonAddFileInputType> = ({
  onCallbackInput,
  ...props
}) => {
  const refInput = useRef<any>(null);
  const onClickButton = () => {
    refInput.current.click();
    refInput.current.value = '';
  };

  return (
    <S.ButtonAddFileInput
      {...props}
      onClick={onClickButton}>
      <S.IconFile />

      <S.InputFile
        type="file"
        ref={refInput}
        onChange={onCallbackInput}
      />
    </S.ButtonAddFileInput>
  );
};
