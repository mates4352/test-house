import React, { FC } from 'react';
import * as S from '../lib/styles/List-main-news-styles';
import { useListMainNews } from '../lib/hooks/useListMainNews';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';

type ListMainNewsType = {};

export const ListMainNews: FC<ListMainNewsType> = ({ ...props }) => {
  const [arrayNews, getArrayNews] = useListMainNews();
  return (
    <S.ListMainNews {...props}>
      <S.List
        arrayNews={arrayNews}
        link={LinkMain.NEWS}
      />

      <S.Button
        type={'button'}
        onClick={getArrayNews}>
        Загрузить еще
      </S.Button>
    </S.ListMainNews>
  );
};
