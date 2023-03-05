import React, { ChangeEvent, FC, useRef } from 'react';
import * as S from '../lib/styles/Custom-button-plus-styles';

type CustomButtonPlusType = {
  isInput?: boolean;
  children: string;
  onCallback?: () => void;
  onCallbackInput?: (e: ChangeEvent<any>) => void;
};

export const CustomButtonPlus: FC<CustomButtonPlusType> = ({
  isInput,
  children,
  onCallback,
  onCallbackInput,
  ...props
}) => {
  const refInput = useRef<any>(null);

  const onClickButton = () => {
    onCallback && onCallback();
    if (onCallbackInput) {
      refInput.current.click();
      refInput.current.value = '';
    }
  };

  return (
    <S.CustomButtonPlus
      type={'button'}
      onClick={onClickButton}
      {...props}>
      {children}

      {isInput && (
        <S.InputFile
          type="file"
          ref={refInput}
          onChange={onCallbackInput}
        />
      )}
      <S.Plus />
    </S.CustomButtonPlus>
  );
};
