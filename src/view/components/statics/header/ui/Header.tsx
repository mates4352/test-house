import React, {FC} from 'react';
import {HeaderStyles} from "../lib/styles/Header-styles";
import {MenuDesktop} from "../../menu-desktop";
import {PopupNotification} from "../../../popups/popup-notification";
import {useHeader} from "../lib/hooks/useHeader";

type HeaderType = {};

export const Header: FC<HeaderType> = ({}) => {
  const {
    Header,
    Container,
    Wrap,
    Notification,
    NotificationButton,
    PopupNotification,
    PersonalCabinet,
    PersonalCabinetButton,
    PopupUser
  } = HeaderStyles
  const [
    refPopupUser,
    refPopupNotification,
    isLinkCabinet,
    isPopupNotification,
    onChangeLinkCabinet,
    onChangePopupNotification] = useHeader()

  return (
    <Header>
      <Container>
        <MenuDesktop/>

        <Wrap>
          <Notification>
            <NotificationButton onClick={onChangePopupNotification(!isPopupNotification)}/>

            {isPopupNotification &&
                <PopupNotification ref={refPopupNotification}/>
            }
          </Notification>

          <PersonalCabinet>
            <PersonalCabinetButton onClick={onChangeLinkCabinet(!isLinkCabinet)}>
              Личный кабинет
            </PersonalCabinetButton>

            {isLinkCabinet &&
                <PopupUser ref={refPopupUser}/>
            }
          </PersonalCabinet>
        </Wrap>
      </Container>
    </Header>
  );
};
