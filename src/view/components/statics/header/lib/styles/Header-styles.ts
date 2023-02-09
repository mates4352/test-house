import styled from "styled-components";
import {PopupUser} from "../../../../popups/popup-user";
import {PopupNotification} from "../../../../popups/popup-notification";

export const HeaderStyles = {
  Header: styled.header`
    display: flex;
    height: 72px;
    background-color: bisque;
  `,

  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 0 40px;
    box-sizing: content-box;
  `,

  Wrap: styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(min-content, max-content);
    align-items: center;
    column-gap: 24px;
  `,

  Notification: styled.div`
    position: relative;
  `,

  NotificationButton: styled.button`
    width: 30px;
    height: 30px;
    background-color: #999;
    border-radius: 50%;
  `,

  PopupNotification: styled(PopupNotification)`
    position: absolute;
    top: 41px;
    left: -220px;
    z-index: 1000;
  `,

  PersonalCabinet: styled.div`
    position: relative;
  `,

  PersonalCabinetButton: styled.button`
    font-size: 20px;
  `,

  PopupUser: styled(PopupUser)`
    position: absolute;
    top: 30px;
    left: -35px;
    width: max-content;
  `,
}