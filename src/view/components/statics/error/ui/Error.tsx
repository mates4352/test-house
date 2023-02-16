import React, { FC, ReactNode } from 'react';
import * as S from '../lib/styles/ErrorStyles';

export type ErrorType = {
  isError: boolean;
  children: ReactNode;
};

export const Error: FC<ErrorType> = ({ isError, children, ...props }) => {
  return <S.Error {...props}>{children}</S.Error>;
};
