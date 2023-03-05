import React, { FC } from 'react';
import * as S from '../lib/styles/Home-styles';
import * as G from '../../../../global-styled-components/global-styled-components';
import { SectionContacts } from '../../../statics/section-contacts';

type HomeType = {};

export const Home: FC<HomeType> = ({}) => {
  return (
    <S.Home>
      <G.Container>
        <S.SectionHomeNews />

        <S.SectionOrders />

        <SectionContacts />
      </G.Container>
    </S.Home>
  );
};
