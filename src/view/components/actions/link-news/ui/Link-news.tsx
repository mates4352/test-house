import React, {FC} from 'react';
import {LinkNewsStyles} from "../lib/styles/Link-news-styles";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";

type LinkNewsType = {
  srcImage: string
  text: string
  id: string
};

export const LinkNews: FC<LinkNewsType> = ({}) => {
  const {LinkNews} = LinkNewsStyles

  return (
    <LinkNews to={LinkMain.NEWS + '/1'}>

    </LinkNews>
  );
};
