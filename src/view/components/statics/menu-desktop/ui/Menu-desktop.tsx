import React, {FC} from 'react';
import {MenuDesktopStyles} from "../lib/styles/Menu-desktop-styles";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";

type MenuDesktopType = {

};

export const MenuDesktop: FC<MenuDesktopType> = ({}) => {
  const {MenuDesktop, List, Item, LinkElement} = MenuDesktopStyles

  return (
    <MenuDesktop>
      <List>
        <Item>
          <LinkElement to={LinkMain.Home}>
            Главная
          </LinkElement>
        </Item>

        <Item>
          <LinkElement to={LinkMain.NEWS}>
            Новости
          </LinkElement>
        </Item>

        <Item>
          <LinkElement to={LinkMain.APPEAL}>
            Обращение
          </LinkElement>
        </Item>

        <Item>
          <LinkElement to={LinkMain.CONTACTS}>
            Справочник
          </LinkElement>
        </Item>
      </List>
    </MenuDesktop>
  );
};
