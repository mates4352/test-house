import React, { FC } from 'react';
import * as S from '../lib/styles/News-styles';
import * as G from '../../../../global-styled-components/global-styled-components';
import { ListLinks } from '../../../actions/list-links';
import { LinkNews } from '../../../../../core/utils/enum/links/link-news';
import { Outlet } from 'react-router-dom';
import { windowScroll } from '../../../../../core/utils/helpers/functions/windowScroll';

type NewsType = {};

export const News: FC<NewsType> = ({}) => {
  windowScroll();

  return (
    <S.News>
      <G.Container>
        <S.Title>Новости</S.Title>
        <ListLinks
          arrayLinks={[
            { text: 'Все новости', link: '' },
            { text: 'Новости района', link: LinkNews.LIST_DISTRICT_NEWS },
          ]}
        />
        <Outlet />
      </G.Container>
    </S.News>
  );
};
