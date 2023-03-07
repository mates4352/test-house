import React, { FC } from 'react';
import * as S from '../lib/styles/News-styles';
import * as G from '../../../../global-styled-components/global-styled-components';
import { ListLinks } from '../../../actions/list-links';
import { Outlet } from 'react-router-dom';
import { windowScroll } from '../../../../../core/utils/helpers/functions/windowScroll';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';

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
            { text: 'Новости района', link: LinkMain.DISTRICT_NEWS },
          ]}
        />
        <Outlet />
      </G.Container>
    </S.News>
  );
};
