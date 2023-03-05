import React, { FC } from 'react';
import * as S from '../lib/styles/News-styles';
import * as G from '../../../../global-styled-components/global-styled-components';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';
import { ListLinks } from '../../../actions/list-links';
import { LinkNews } from '../../../../../core/utils/enum/links/link-news';
import { Outlet } from 'react-router-dom';
import { useRedirect } from '../../../../../core/utils/hooks/useRedirect';
import { windowScroll } from '../../../../../core/utils/helpers/functions/windowScroll';

type NewsType = {};

export const News: FC<NewsType> = ({}) => {
  useRedirect(LinkMain.NEWS, LinkNews.LIST_MAIN_NEWS);
  windowScroll();

  return (
    <S.News>
      <G.Container>
        <S.Title>Новости</S.Title>
        <ListLinks
          arrayLinks={[
            { text: 'Все новости', link: LinkNews.LIST_MAIN_NEWS },
            { text: 'Новости района', link: LinkNews.LIST_DISTRICT_NEWS },
          ]}
        />
        <Outlet />
      </G.Container>
    </S.News>
  );
};
