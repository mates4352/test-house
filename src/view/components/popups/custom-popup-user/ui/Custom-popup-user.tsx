import React, { FC } from 'react';
import * as S from '../lib/styles/Custom-popup-user-styles';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';
import { LinkAuth } from '../../../../../core/utils/enum/links/link-auth';

type CustomPopupUserType = {
  ref: any;
};

export const CustomPopupUser: FC<CustomPopupUserType> = React.forwardRef(
  (props, ref: any) => {
    return (
      <S.CustomPopupUser
        {...props}
        ref={ref}>
        <S.List>
          <S.Item>
            <S.LinkElement to={LinkMain.PERSONAL_CABINET}>
              Личный кабинет
            </S.LinkElement>
          </S.Item>

          <S.Item>
            <S.LinkElement to={LinkAuth.AUTH}>Выход</S.LinkElement>
          </S.Item>
        </S.List>
      </S.CustomPopupUser>
    );
  },
);
