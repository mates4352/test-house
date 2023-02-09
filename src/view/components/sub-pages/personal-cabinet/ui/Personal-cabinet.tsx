import React, {FC} from 'react';
import {PersonalCabinetStyles} from "../lib/styles/Personal-cabinet-styles";
import {Outlet} from "react-router-dom";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";
import {useRedirect} from "../../../../../core/utils/hooks/useRedirect";

type PersonalCabinetType = {};

export const PersonalCabinet: FC<PersonalCabinetType> = ({}) => {
  const {PersonalCabinet, Container, Title, List, Item, LinkElement} = PersonalCabinetStyles
  useRedirect(LinkMain.PERSONAL_CABINET, LinkMain.PERSONAL_CABINET_DATA)

  return (
    <PersonalCabinet>
      <Container>
        <Title>Личный кабинет</Title>

        <List>
          <Item>
            <LinkElement to={LinkMain.PERSONAL_CABINET_DATA}>
              Данные
            </LinkElement>
          </Item>

          <Item>
            <LinkElement to={LinkMain.PERSONAL_CABINET_List_APPLICATIONS}>
              Список заявок
            </LinkElement>
          </Item>
        </List>
        <Outlet/>
      </Container>
    </PersonalCabinet>
  );
};
