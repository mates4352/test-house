import React, {FC} from 'react';
import * as S from "../lib/styles/Home-styles";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";
import * as G from "../../../../global-styled-components/global-styled-components";

type HomeType = {};

export const Home: FC<HomeType> = ({}) => {

  return (
    <S.Home>
      <G.Container>
        <S.Block bg={'gold'} to={LinkMain.NEWS}>
          Новости от управляющей службы
        </S.Block>

        <S.Block bg={'limegreen'} to={LinkMain.APPEAL}>
          Форма обращения
        </S.Block>

        <S.Block bg={'royalblue'} to={LinkMain.CONTACTS}>
          Справочник
        </S.Block>
      </G.Container>
    </S.Home>
  );
};
