import styled from 'styled-components';
import { CustomPopupUser } from '../../../../popups/custom-popup-user';
import { CustomPopupNotification } from '../../../../popups/custom-popup-notification';
import { Container } from '../../../../../global-styled-components/global-styled-components';

const Header = styled.header`
  display: flex;
  height: 72px;
  background-color: #f5f5ff;
  box-shadow: 0 1px 4px #e7e7ff;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Wrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(min-content, max-content);
  align-items: center;
  column-gap: 24px;
`;

const Notification = styled.div`
  position: relative;
`;

const NotificationButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #8989ff;
  border-radius: 50%;
`;

const PopupNotification = styled(CustomPopupNotification)`
  position: absolute;
  top: 41px;
  left: -220px;
  z-index: 1000;
`;

const PersonalCabinet = styled.div`
  position: relative;
`;

const PersonalCabinetButton = styled.button`
  font-size: 20px;
  font-weight: 500;
`;

const PopupUser = styled(CustomPopupUser)`
  position: absolute;
  top: 30px;
  left: -35px;
  width: max-content;
`;

export {
  Header,
  HeaderContainer,
  Wrap,
  Notification,
  NotificationButton,
  PopupNotification,
  PersonalCabinet,
  PersonalCabinetButton,
  PopupUser,
};
