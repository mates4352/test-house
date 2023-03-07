import React, { FC, useEffect } from 'react';
import * as S from '../lib/styles/Main-styles';
import { Header } from '../../../statics/header';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../../../statics/footer';
import { useRedirect } from '../../../../../core/utils/hooks/useRedirect';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';

type MainType = {};

export const Main: FC<MainType> = ({}) => {
  useRedirect(LinkMain.MAIN, LinkMain.Home);
  const location = useLocation();
  useEffect(() => {
    const arrayPath = location.pathname.split('/');
    if (arrayPath[arrayPath.length - 1].length > 20) {
      document.title = arrayPath[arrayPath.length - 2];
    } else {
      document.title = arrayPath[arrayPath.length - 1];
    }
  }, [location]);
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
