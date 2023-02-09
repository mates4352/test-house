import React, {FC, ReactNode} from 'react';
import {TitleAuthStyles} from "../lib/styles/Title-auth-styles";

type TitleAuthType = {
  children: ReactNode
};

export const TitleAuth: FC<TitleAuthType> = ({
  children,
  ...props
}) => {
  const {TitleAuth} = TitleAuthStyles

  return (
    <TitleAuth {...props}>
      {children}
    </TitleAuth>
  );
};
