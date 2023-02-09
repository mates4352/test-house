import React, {FC} from 'react';
import {ListApplicationsStyles} from "../lib/styles/List-applications-styles";
import {LinkMain} from "../../../../../../core/utils/enum/links/link-main";

type ListApplicationsType = {};

export const ListApplications: FC<ListApplicationsType> = ({}) => {
  const {ListApplications, List, Item, LinkElement, Application, Status, Name, Date} = ListApplicationsStyles

  return (
    <ListApplications>
      <List>
        <Item>
          <LinkElement to={LinkMain.APPLICATION + '/1'}>
            <Application>
              <Status>
                Статус: не готов
              </Status>

              <Name>
                Заявка: электрика
              </Name>

              <Date dateTime={'2015-11-18'}>
                18 ноября 2015
              </Date>
            </Application>
          </LinkElement>
        </Item>

        <Item>
          <LinkElement to={LinkMain.APPLICATION + '/2'}>
            <Application>
              <Status>
                Статус: в разработке
              </Status>

              <Name>
                Заявка: электрика
              </Name>

              <Date dateTime={'2016-11-18'}>
                18 ноября 2016
              </Date>
            </Application>
          </LinkElement>
        </Item>

        <Item>
          <LinkElement to={LinkMain.APPLICATION + '/3'}>
            <Application>
              <Status>
                Статус: готов
              </Status>

              <Name>
                Заявка: электрика
              </Name>

              <Date dateTime={'2015-11-18'}>
                18 ноября 2017
              </Date>
            </Application>
          </LinkElement>
        </Item>
      </List>
    </ListApplications>
  );
};
