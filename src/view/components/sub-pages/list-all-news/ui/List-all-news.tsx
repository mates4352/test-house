import React, { FC } from 'react';
import * as S from '../lib/styles/List-all-news-styles';
import { useListAllNews } from '../lib/hooks/useListAllNews';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';

type ListAllNewsType = {};

export const ListAllNews: FC<ListAllNewsType> = ({ ...props }) => {
  const [arrayNews] = useListAllNews();
  return (
    <S.ListAllNews {...props}>
      <S.List
        arrayNews={arrayNews}
        link={LinkMain.NEWS}
      />

      <S.PaginationAllNews
        selectOptionValue={10}
        arrayOptionSelect={[20, 30, 50, 100]}
        pageCount={10}
        currentPage={1}
        pageCurrentCount={190}
        maxPageNumber={5}
      />
    </S.ListAllNews>
  );
};
