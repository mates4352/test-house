import React, { FC } from 'react';
import * as S from '../lib/styles/Custom-button-back-styles';
import { useNavigate } from 'react-router-dom';

type CustomButtonBackType = {
  onCallback?: () => void;
};

export const CustomButtonBack: FC<CustomButtonBackType> = ({
  onCallback,
  ...props
}) => {
  const navigate = useNavigate();
  const onBackPage = () => {
    if (onCallback) {
      onCallback();
    } else {
      navigate(-1);
    }
  };

  return (
    <S.CustomButtonBack
      type={'button'}
      onClick={onBackPage}
      {...props}>
      <S.Arrow />
      Назад
    </S.CustomButtonBack>
  );
};
