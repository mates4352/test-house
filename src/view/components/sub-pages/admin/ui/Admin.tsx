import React, {FC} from 'react';
import * as S from "../lib/styles/Admin-styles";
import {Outlet} from "react-router-dom";
import {ListLinks} from "../../../actions/list-links";
import {LinkAdmin} from "../../../../../core/utils/enum/links/link-admin";
import {useRedirect} from "../../../../../core/utils/hooks/useRedirect";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";
import {Container} from "../../../../global-styled-components/global-styled-components";

type AdminType = {};

export const Admin: FC<AdminType> = ({}) => {
  useRedirect(LinkMain.ADMIN, LinkAdmin.LIST_ORDERS)

  return (
    <S.Admin>
      <Container>
        <ListLinks arrayLinks={[
          {text: 'Список заявок', link: LinkAdmin.LIST_ORDERS},
          {text: 'Список медераторов', link: LinkAdmin.LIST_MODERATORS},
          {text: 'Список жильцов', link: LinkAdmin.LIST_LODGERS},
          {text: 'Список новостей', link: LinkAdmin.LIST_NEWS},
        ]}/>

        <Outlet/>
      </Container>
    </S.Admin>
  );
};
