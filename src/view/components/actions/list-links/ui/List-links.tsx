import React, { FC } from 'react';
import * as S from '../lib/styles/List-links-styles';

type LinkType = { text: string; link: string };

type ListLinksType = {
  arrayLinks: Array<LinkType>;
};

export const ListLinks: FC<ListLinksType> = ({ arrayLinks, ...props }) => {
  return (
    <S.ListLinks {...props}>
      {arrayLinks.map(item => (
        <S.Item key={item.text}>
          <S.LinkElement to={item.link}>
            {item.text}
            <S.Line />
          </S.LinkElement>
        </S.Item>
      ))}
    </S.ListLinks>
  );
};
