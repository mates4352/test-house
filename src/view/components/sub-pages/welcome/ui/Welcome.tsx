import React, { FC } from 'react';
import * as S from '../lib/styles/Welcome-styles';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';

type WelcomeType = {};

export const Welcome: FC<WelcomeType> = ({}) => {
  return (
    <S.Welcome>
      <S.Title>Добро пожаловать!</S.Title>

      <S.Wrap>
        <S.LinkElement to={LinkMain.MAIN}>Главная страница</S.LinkElement>

        <S.LinkElement to={LinkMain.MAIN}>Личный кабинет</S.LinkElement>
      </S.Wrap>
    </S.Welcome>
  );
};
