import React, { FC } from 'react';
import * as S from '../lib/styles/List-district-news-styles';
import { useListDistrictNews } from '../lib/hooks/useListDistrictNews';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';

type ListDistrictNewsType = {};

export const ListDistrictNews: FC<ListDistrictNewsType> = ({ ...props }) => {
  const [arrayNews, getArrayNews] = useListDistrictNews();
  return (
    <S.ListDistrictNews {...props}>
      <S.List
        arrayNews={arrayNews}
        link={LinkMain.NEWS}
      />

      <S.Button
        type={'button'}
        onClick={getArrayNews}>
        Загрузить еще
      </S.Button>
    </S.ListDistrictNews>
  );
};
