import React, {FC} from 'react';
import * as S from "../lib/styles/contacts-styles";
import {LinkCompany} from "../../../actions/link-company";

type ContactsType = {};

export const Contacts: FC<ContactsType> = ({}) => {

  return (
    <S.Contacts>
      <S.ContactsContainer>
        <LinkCompany
          srcImage={''}
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem nam nisi, praesentium recusandae suscipit.'}/>

        <LinkCompany
          srcImage={''}
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem nam nisi, praesentium recusandae suscipit.'}/>

        <LinkCompany
          srcImage={''}
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem nam nisi, praesentium recusandae suscipit.'}/>

        <LinkCompany
          srcImage={''}
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem nam nisi, praesentium recusandae suscipit.'}/>
      </S.ContactsContainer>
    </S.Contacts>
  );
};
