import React, { FC } from 'react';
import * as S from '../lib/styles/Section-home-list-news-styles';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';
import { ListNews } from '../../list-news';
import { LinkResponse } from '../../../actions/link-news/ui/Link-news';
import uuid from 'react-uuid';
import { CustomLink } from '../../../actions/custom-link';

type SectionHomeListNewsType = {};

export const SectionHomeListNews: FC<SectionHomeListNewsType> = ({
  ...props
}) => {
  const arrayNews: Array<LinkResponse> = [
    {
      id: uuid(),
      tag: '',
      text: 'Ликвидация граффити на улице Некрасова',
      subText: '20.03.2030',
    },

    {
      id: uuid(),
      text: 'Ввод новых автобусных маршрутов',
      subText: '21.08.2130',
    },

    {
      id: uuid(),
      text: 'Косметический ремонт парадной на Басковом переулке',
    },
  ];

  return (
    <S.SectionHomeListNews {...props}>
      <S.Wrap>
        <S.Title>Мои новости</S.Title>

        <CustomLink to={LinkMain.NEWS}>Посмотреть все</CustomLink>
      </S.Wrap>

      <ListNews
        arrayNews={arrayNews}
        link={LinkMain.NEWS}
      />
    </S.SectionHomeListNews>
  );
};
