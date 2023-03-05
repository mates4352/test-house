import React, { FC } from 'react';
import * as S from '../lib/styles/Question-text-styles';

type QuestionTextType = {
  children: string;
};

export const QuestionText: FC<QuestionTextType> = ({ children, ...props }) => {
  return <S.QuestionText {...props}>{children}</S.QuestionText>;
};
