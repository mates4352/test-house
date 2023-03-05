import React, { FC } from 'react';
import * as S from '../lib/styles/Header-styles';
import { MenuDesktop } from '../../menu-desktop';
import { useHeader } from '../lib/hooks/useHeader';
import avatar from './../../../../../assets/images/icons/ava.svg';

type HeaderType = {};

export const Header: FC<HeaderType> = ({}) => {
  const [refPopupUser, isLinkCabinet, onChangeLinkCabinet] = useHeader();

  return (
    <S.Header>
      <S.HeaderContainer>
        <MenuDesktop />

        <S.PersonalCabinet>
          <S.Avatar onClick={onChangeLinkCabinet(!isLinkCabinet)}>
            <S.Image
              src={avatar}
              alt="Аватар"
            />
          </S.Avatar>

          {isLinkCabinet && <S.PopupUser ref={refPopupUser} />}
        </S.PersonalCabinet>
      </S.HeaderContainer>
    </S.Header>
  );
};
