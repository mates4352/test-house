import React, { FC } from 'react';
import * as S from '../lib/styles/Custom-popup-delete-styles';

type CustomPopupDeleteType = {
  title: string;
  text: string;
  onCallbackButton: () => void;
  onClearPopup: () => void;
};

export const CustomPopupDelete: FC<CustomPopupDeleteType> = ({
  title,
  text,
  onCallbackButton,
  onClearPopup,
  ...props
}) => {
  return (
    <S.CustomPopupDelete {...props}>
      <S.Bg onClick={onClearPopup} />

      <S.Body>
        <S.Title>{title}</S.Title>

        <S.Text>{text}</S.Text>

        <S.ButtonDelete
          property={'common'}
          type={'button'}
          onClick={onCallbackButton}>
          Удалить
        </S.ButtonDelete>
      </S.Body>
    </S.CustomPopupDelete>
  );
};
