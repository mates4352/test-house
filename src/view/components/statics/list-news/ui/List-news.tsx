import React, { FC } from 'react';
import * as S from '../lib/styles/List-news-styles';
import { LinkNews } from '../../../actions/link-news';

type NewType = {
  id: string;
  status: 'main' | 'area' | string;
  image: string;
  previewText: string;
};

type ListNewsType = {
  arrayNews: Array<NewType>;
  link: string;
  admin?: boolean;
};

export const ListNews: FC<ListNewsType> = ({
  link,
  admin = false,
  arrayNews,
  ...props
}) => {
  return (
    <S.ListNews {...props}>
      {admin && (
        <S.Item>
          <S.LinkCreateNews to={link}>Добавить новость</S.LinkCreateNews>
        </S.Item>
      )}

      {arrayNews.map(item => (
        <S.Item key={item.id}>
          <LinkNews
            link={link}
            srcImage={item.image}
            previewText={item.previewText}
            id={item.id}
            admin={admin}
          />
        </S.Item>
      ))}
    </S.ListNews>
  );
};
