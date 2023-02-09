import React, {FC} from 'react';
import * as S from "../lib/styles/List-news-styles";
import {LinkNews} from "../../../actions/link-news";

type NewType = {
  id: string
  status: 'main' | 'area' | string
  image: string
  previewText: string
}

type ListNewsType = {
  arrayNews: Array<NewType>
};

export const ListNews: FC<ListNewsType> = ({
  arrayNews,
  ...props
}) => {

  return (
    <S.ListNews {...props}>
      {arrayNews.map(item =>
        <S.Item key={item.id}>
          <LinkNews
            srcImage={item.image}
            previewText={item.previewText}
            id={item.id}/>
        </S.Item>
      )}
    </S.ListNews>
  );
};
