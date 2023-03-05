import React, { FC, ReactNode } from 'react';
import * as S from '../lib/styles/Custom-link-styles';

type CustomLinkType = {
  to: string;
  children: ReactNode;
};

export const CustomLink: FC<CustomLinkType> = ({ to, children, ...props }) => {
  return (
    <S.CustomLink
      to={to}
      {...props}>
      {children}
    </S.CustomLink>
  );
};
