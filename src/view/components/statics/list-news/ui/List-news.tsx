import React, { FC } from 'react';
import * as S from '../lib/styles/List-news-styles';
import { LinkNews } from '../../../actions/link-news';
import { LinkResponse } from '../../../actions/link-news/ui/Link-news';

type ListNewsType = {
  arrayNews: Array<LinkResponse>;
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
    <>
      <S.ListNews {...props}>
        {arrayNews.map(item => (
          <S.Item key={item.id}>
            <LinkNews
              link={link}
              image={item.image}
              tag={item.tag}
              text={item.text}
              subText={item.subText}
              id={item.id}
              admin={admin}
            />
          </S.Item>
        ))}
      </S.ListNews>
    </>
  );
};
