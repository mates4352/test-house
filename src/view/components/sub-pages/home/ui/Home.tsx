import React, {FC} from 'react';
import {HomeStyles} from "../lib/styles/Home-styles";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";

type HomeType = {};

export const Home: FC<HomeType> = ({}) => {
  const {Home, Container, Block} = HomeStyles

  return (
    <Home>
      <Container>
        <Block bg={'gold'} to={LinkMain.NEWS}>
          Новости от управляющей службы
        </Block>

        <Block bg={'limegreen'} to={LinkMain.APPEAL}>
          Форма обращения
        </Block>

        <Block bg={'royalblue'} to={LinkMain.CONTACTS}>
          Справочник
        </Block>
      </Container>
    </Home>
  );
};
