import React, { FC } from 'react';
import * as S from '../lib/styles/Card-image-styles';

type CardImageType = {
  image?: string;
};

export const CardImage: FC<CardImageType> = ({ image, ...props }) => {
  return (
    <S.CardImage
      bg={image}
      {...props}
    />
  );
};
