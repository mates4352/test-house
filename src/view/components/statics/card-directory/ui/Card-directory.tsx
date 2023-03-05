import React, { FC, useEffect, useRef } from 'react';
import * as S from '../lib/styles/Card-directory-styles';

type CardDirectoryType = {
  title: string;
  array: Array<{ id: string; text: string }>;
  link: string;
};

export const CardDirectory: FC<CardDirectoryType> = ({
  title,
  array,
  link,
  ...props
}) => {
  return (
    <S.CardDirectory {...props}>
      <S.Title>{title}</S.Title>

      <S.List>
        {array.map(el => (
          <S.Item key={el.id}>
            <S.Link to={link + `/${el.id}`}>{el.text}</S.Link>
          </S.Item>
        ))}
      </S.List>
    </S.CardDirectory>
  );
};
