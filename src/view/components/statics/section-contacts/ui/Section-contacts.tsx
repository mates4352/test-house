import React, { FC } from 'react';
import * as S from '../lib/styles/Section-contacts-styles';
import { CustomLink } from '../../../actions/custom-link';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';
import { ListCardsDirectory } from '../../list-cards-directory';
import { arrayContacts } from '../test-data';

type SectionContactsType = {};

export const SectionContacts: FC<SectionContactsType> = ({}) => {
  return (
    <S.SectionContacts>
      <S.Wrap>
        <S.Title>Справочник</S.Title>
        <CustomLink to={LinkMain.CONTACTS}>Посмотреть все</CustomLink>
      </S.Wrap>
      <ListCardsDirectory
        array={arrayContacts}
        link={LinkMain.CONTACTS}
      />
    </S.SectionContacts>
  );
};
