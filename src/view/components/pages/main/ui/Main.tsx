import React, { FC } from 'react';
import * as S from '../lib/styles/Main-styles';
import { Header } from '../../../statics/header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../../statics/footer';
import { useRedirect } from '../../../../../core/utils/hooks/useRedirect';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';

type MainType = {};

export const Main: FC<MainType> = ({}) => {
  useRedirect(LinkMain.MAIN, LinkMain.Home);

  return (
    <S.Main>
      <Header />

      <S.Content>
        <Outlet />
      </S.Content>

      <Footer />
    </S.Main>
  );
};
