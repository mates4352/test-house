import React, {FC} from 'react';
import  * as  S from  './../lib/styles/Link-news-styles'
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";

type LinkNewsType = {
  srcImage: string
  previewText: string
  id: string
};

export const LinkNews: FC<LinkNewsType> = ({
  srcImage,
  previewText,
  id,
  ...props
}) => {

  return (
    <S.LinkNews to={LinkMain.NEWS + `/${id}`} {...props}>
      <S.PreviewText>{previewText}</S.PreviewText>
    </S.LinkNews>
  );
};
