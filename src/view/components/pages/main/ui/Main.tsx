import React, {FC} from 'react';
import {MainStyles} from "../lib/styles/Main-styles";
import {Header} from "../../../statics/header";
import {Outlet} from "react-router-dom";
import {Footer} from "../../../statics/footer";
import {useRedirect} from "../../../../../core/utils/hooks/useRedirect";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";

type MainType = {

};

export const Main: FC<MainType> = ({}) => {
  const {Main, Content} = MainStyles
  useRedirect(LinkMain.MAIN, LinkMain.Home)

  return (
    <Main>
      <Header/>

      <Content>
        <Outlet/>
      </Content>

      <Footer/>
    </Main>
  );
};
