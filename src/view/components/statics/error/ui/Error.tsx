import React, {FC, ReactNode} from 'react';
import {ErrorStyles} from "../lib/styles/ErrorStyles";

export type ErrorType = {
  isError: boolean
  children: ReactNode
};

export const Error: FC<ErrorType> = ({
  isError,
  children,
  ...props
}) => {
  const {Error} = ErrorStyles

  return (
    <Error  {...props}>
      {children}
    </Error>
  );
};
