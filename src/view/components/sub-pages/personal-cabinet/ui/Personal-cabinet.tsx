import React, { FC } from 'react';
import * as S from '../lib/styles/Personal-cabinet-styles';
import { Outlet } from 'react-router-dom';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';
import { useRedirect } from '../../../../../core/utils/hooks/useRedirect';
import { ListLinks } from '../../../actions/list-links';
import { LinkCabinet } from '../../../../../core/utils/enum/links/link-cabinet';
import * as G from '../../../../global-styled-components/global-styled-components';
import { windowScroll } from '../../../../../core/utils/helpers/functions/windowScroll';

type PersonalCabinetType = {};

export const PersonalCabinet: FC<PersonalCabinetType> = ({}) => {
  useRedirect(LinkMain.PERSONAL_CABINET, LinkCabinet.PERSONAL_CABINET_DATA);
  windowScroll();

  return (
    <S.PersonalCabinet>
      <G.Container>
        <S.Title>Личный кабинет</S.Title>

        <ListLinks
          arrayLinks={[
            { text: 'Данные', link: LinkCabinet.PERSONAL_CABINET_DATA },
            {
              text: 'Список заявок',
              link: LinkCabinet.PERSONAL_CABINET_LIST_ORDERS,
            },
          ]}
        />

        <Outlet />
      </G.Container>
    </S.PersonalCabinet>
  );
};
