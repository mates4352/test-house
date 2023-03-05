import styled from 'styled-components';
import { CustomPopupUser } from '../../../../popups/custom-popup-user';
import { Container } from '../../../../../global-styled-components/global-styled-components';

const Header = styled.header`
  display: flex;
  height: 112px;
  background-color: var(--blue);
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PersonalCabinet = styled.div`
  position: relative;
`;

const Avatar = styled.button``;

const Image = styled.img``;

const PopupUser = styled(CustomPopupUser)`
  position: absolute;
  top: 72px;
  right: 0;
  z-index: 100;
  width: max-content;
`;

export { Header, HeaderContainer, PersonalCabinet, Avatar, Image, PopupUser };
