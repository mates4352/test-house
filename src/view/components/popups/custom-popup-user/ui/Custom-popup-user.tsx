import React, { FC } from 'react';
import * as S from '../lib/styles/Custom-popup-user-styles';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';
import { LinkAuth } from '../../../../../core/utils/enum/links/link-auth';
import { IconPerson } from '../../../icons/Icon-person';
import { IconGoOut } from '../../../icons/Icon-go-out';

type CustomPopupUserType = {
  ref: any;
  name?: string;
};

export const CustomPopupUser: FC<CustomPopupUserType> = React.forwardRef(
  (props, ref: any) => {
    return (
      <S.CustomPopupUser
        {...props}
        ref={ref}>
        <S.WrapName>
          <S.Name>{!props.name && 'Иванова М. А.'}</S.Name>

          <S.Type>Пользователь</S.Type>
        </S.WrapName>
        <S.List>
          <S.Item>
            <S.LinkElement to={LinkMain.PERSONAL_CABINET}>
              <IconPerson
                width={16}
                height={16}
              />
              Личный кабинет
            </S.LinkElement>
          </S.Item>

          <S.Item>
            <S.LinkElement to={LinkAuth.AUTH}>
              <IconGoOut
                width={16}
                height={16}
              />
              Выйти
            </S.LinkElement>
          </S.Item>
        </S.List>
      </S.CustomPopupUser>
    );
  },
);
