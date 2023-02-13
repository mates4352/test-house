import React, {FC} from 'react';
import * as S from "../lib/styles/Header-styles";
import {MenuDesktop} from "../../menu-desktop";
import {useHeader} from "../lib/hooks/useHeader";

type HeaderType = {};

export const Header: FC<HeaderType> = ({}) => {
  const [
    refPopupUser,
    refPopupNotification,
    isLinkCabinet,
    isPopupNotification,
    onChangeLinkCabinet,
    onChangePopupNotification] = useHeader()

  return (
    <S.Header>
      <S.HeaderContainer>
        <MenuDesktop/>

        <S.Wrap>
          <S.Notification>
            <S.NotificationButton onClick={onChangePopupNotification(!isPopupNotification)}/>

            {isPopupNotification &&
                <S.PopupNotification ref={refPopupNotification}/>
            }
          </S.Notification>

          <S.PersonalCabinet>
            <S.PersonalCabinetButton onClick={onChangeLinkCabinet(!isLinkCabinet)}>
              Личный кабинет
            </S.PersonalCabinetButton>

            {isLinkCabinet &&
                <S.PopupUser ref={refPopupUser}/>
            }
          </S.PersonalCabinet>
        </S.Wrap>
      </S.HeaderContainer>
    </S.Header>
  );
};
