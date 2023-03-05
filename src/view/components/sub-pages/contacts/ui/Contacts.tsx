import React, { FC } from 'react';
import * as S from '../lib/styles/contacts-styles';
import * as G from '../../../../global-styled-components/global-styled-components';
import { arrayCompany } from '../test-data';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';
import { windowScroll } from '../../../../../core/utils/helpers/functions/windowScroll';

type ContactsType = {};

export const Contacts: FC<ContactsType> = ({}) => {
  windowScroll();

  return (
    <S.Contacts>
      <G.Container>
        <S.Title>Справочник</S.Title>
        <S.ListCard
          array={arrayCompany}
          link={LinkMain.CONTACTS}
        />

        <S.PaginationContacts
          selectOptionValue={10}
          arrayOptionSelect={[20, 30, 50, 100]}
          pageCount={10}
          currentPage={1}
          pageCurrentCount={190}
          maxPageNumber={5}
        />
      </G.Container>
    </S.Contacts>
  );
};
