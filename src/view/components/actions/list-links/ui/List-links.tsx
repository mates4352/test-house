import React, { FC } from 'react';
import * as S from '../lib/styles/List-links-styles';
import { useListLinks } from '../lib/hooks/useListLinks';

type LinkType = { text: string; link: string };

type ListLinksType = {
  arrayLinks: Array<LinkType>;
};

export const ListLinks: FC<ListLinksType> = ({ arrayLinks, ...props }) => {
  const [refList, refLine, onClickList] = useListLinks();

  return (
    <S.ListLinks
      {...props}
      onClick={onClickList}
      ref={refList}>
      {arrayLinks.map(item => (
        <S.Item key={item.text}>
          <S.LinkElement to={item.link}>{item.text}</S.LinkElement>
        </S.Item>
      ))}
      <S.Line ref={refLine} />
    </S.ListLinks>
  );
};
