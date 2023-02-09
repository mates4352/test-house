import React, {FC} from 'react';
import {WelcomeStyles} from "../lib/styles/Welcome-styles";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";

type WelcomeType = {

};

export const Welcome: FC<WelcomeType> = ({}) => {
  const {Welcome, Wrap, Title, Link} = WelcomeStyles

  return (
    <Welcome>
      <Title>Добро пожаловать!</Title>

      <Wrap>
        <Link to={LinkMain.MAIN}>Главная страница</Link>

        <Link to={LinkMain.MAIN}>Личный кабинет</Link>
      </Wrap>
    </Welcome>
  );
};
