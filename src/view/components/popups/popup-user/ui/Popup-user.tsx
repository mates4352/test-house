import React, {FC} from 'react';
import {PopupUserStyles} from "../lib/styles/Popup-user-styles";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";
import {LinkAuth} from "../../../../../core/utils/enum/links/link-auth";

type PopupUserType = {
  ref: any
};

export const PopupUser: FC<PopupUserType> = React.forwardRef((props, ref: any) => {
  const {PopupUser, List, Item, LinkElement} = PopupUserStyles

  return (
    <PopupUser {...props} ref={ref}>
      <List>
        <Item>
          <LinkElement to={LinkMain.PERSONAL_CABINET}>Личный кабинет</LinkElement>
        </Item>

        <Item>
          <LinkElement to={LinkAuth.AUTH}>Выход</LinkElement>
        </Item>
      </List>
    </PopupUser>
  );
})
