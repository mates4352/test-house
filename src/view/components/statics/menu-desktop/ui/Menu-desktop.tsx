import React, {FC} from 'react';
import * as S from "../lib/styles/Menu-desktop-styles";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";

type MenuDesktopType = {

};

export const MenuDesktop: FC<MenuDesktopType> = ({}) => {

  return (
    <S.MenuDesktop>
      <S.List>
        <S.Item>
          <S.LinkElement to={LinkMain.Home}>
            Главная
          </S.LinkElement>
        </S.Item>

        <S.Item>
          <S.LinkElement to={LinkMain.NEWS}>
            Новости
          </S.LinkElement>
        </S.Item>

        <S.Item>
          <S.LinkElement to={LinkMain.APPEAL}>
            Обращение
          </S.LinkElement>
        </S.Item>

        <S.Item>
          <S.LinkElement to={LinkMain.CONTACTS}>
            Справочник
          </S.LinkElement>
        </S.Item>

        <S.Item>
          <S.LinkElement to={LinkMain.ADMIN}>
            Администрирование
          </S.LinkElement>
        </S.Item>
      </S.List>
    </S.MenuDesktop>
  );
};
