import React, {FC, ReactNode} from 'react';
import * as S from "../lib/styles/Title-auth-styles";

type TitleAuthType = {
  children: ReactNode
};

export const TitleAuth: FC<TitleAuthType> = ({
  children,
  ...props
}) => {

  return (
    <S.TitleAuth {...props}>
      {children}
    </S.TitleAuth>
  );
};
