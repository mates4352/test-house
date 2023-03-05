import React, { FC } from 'react';
import * as S from './../lib/styles/Link-news-styles';
import { IconEdit } from '../../../icons/Icon-edit';

export type LinkResponse = {
  id: string;
  image?: string;
  tag?: string;
  text?: string;
  subText?: string;
};

export type LinkNewsType = LinkResponse & {
  admin: boolean;
  link: string;
};

export const LinkNews: FC<LinkNewsType> = ({
  id,
  admin,
  image,
  tag = 'Черновик',
  text = 'Заголовок статьи в пару слов/строк/предложений',
  subText = 'дата/или тег',
  link,
  ...props
}) => {
  return (
    <S.LinkNews
      {...props}
      to={link + `/${id}`}>
      <S.Card bg={image}>
        <S.Bg />

        {admin && tag && <S.Tag>{tag}</S.Tag>}

        {admin && (
          <S.ButtonEdit>
            <IconEdit
              width={32}
              height={32}
            />
          </S.ButtonEdit>
        )}
      </S.Card>

      <S.Text>{text}</S.Text>

      <S.SubText>{subText}</S.SubText>
    </S.LinkNews>
  );
};
