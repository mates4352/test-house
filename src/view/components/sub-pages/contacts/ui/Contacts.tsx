import React, {FC} from 'react';
import * as S from "../lib/styles/contacts-styles";
import {LinkCompany} from "../../../actions/link-company";
import uuid from "react-uuid";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";
import {Container} from '../../../../global-styled-components/global-styled-components';

type ContactsType = {};

export const Contacts: FC<ContactsType> = ({}) => {
  const arrayCompany = [
    {
      id: uuid(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem nam nisi, praesentium recusandae suscipit',
      image: '',
    },

    {
      id: uuid(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem nam nisi, praesentium recusandae suscipit',
      image: '',
    },

    {
      id: uuid(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem nam nisi, praesentium recusandae suscipit',
      image: '',
    },

    {
      id: uuid(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem nam nisi, praesentium recusandae suscipit',
      image: '',
    },
  ]

  return (
    <S.Contacts>
      <Container>
        <S.List>
          {arrayCompany.map(el =>
            <S.Item>
              <LinkCompany
                text={el.text}
                srcImage={el.image}
                link={LinkMain.CONTACTS + `/${el.id}`}/>
            </S.Item>
          )}
        </S.List>
      </Container>
    </S.Contacts>
  );
};
