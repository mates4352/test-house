import React, { FC } from 'react';
import * as S from './../lib/styles/Link-news-styles';

type LinkNewsType = {
  srcImage: string;
  previewText: string;
  id: string;
  link: string;
  admin?: boolean;
};

export const LinkNews: FC<LinkNewsType> = ({
  srcImage,
  previewText,
  id,
  link,
  admin,
  ...props
}) => {
  return (
    <S.LinkNews
      {...props}
      to={link + `/${id}`}>
      {!admin && <S.PreviewText>{previewText}</S.PreviewText>}
      {admin && <S.AdminPreviewText>Редактировать</S.AdminPreviewText>}
    </S.LinkNews>
  );
};
