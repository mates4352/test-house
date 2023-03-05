import React, { FC } from 'react';
import * as S from '../lib/styles/Tag-styles';

type TagType = {
  children: string;
};

export const Tag: FC<TagType> = ({ children, ...props }) => {
  return <S.Tag {...props}>{children}</S.Tag>;
};
