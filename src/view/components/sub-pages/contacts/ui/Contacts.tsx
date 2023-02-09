import React, {FC} from 'react';
import {ContactsStyles} from "../lib/styles/contacts-styles";
import {LinkCompany} from "../../../actions/link-company";

type ContactsType = {};

export const Contacts: FC<ContactsType> = ({}) => {
  const {Contacts, Container} = ContactsStyles

  return (
    <Contacts>
      <Container>
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
      </Container>
    </Contacts>
  );
};
