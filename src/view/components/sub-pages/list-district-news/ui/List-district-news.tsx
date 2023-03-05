import React, { FC } from 'react';
import * as S from '../lib/styles/List-district-news-styles';
import { useListDistrictNews } from '../lib/hooks/useListDistrictNews';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';

type ListDistrictNewsType = {};

export const ListDistrictNews: FC<ListDistrictNewsType> = ({ ...props }) => {
  const [arrayNews] = useListDistrictNews();
  return (
    <S.ListDistrictNews {...props}>
      <S.List
        arrayNews={arrayNews}
        link={LinkMain.NEWS}
      />

      <S.PaginationDistrictNews
        selectOptionValue={10}
        arrayOptionSelect={[20, 30, 50, 100]}
        pageCount={10}
        currentPage={1}
        pageCurrentCount={190}
        maxPageNumber={5}
      />
    </S.ListDistrictNews>
  );
};
