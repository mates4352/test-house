import React, { FC } from 'react';
import * as S from '../lib/styles/List-cards-directory-styles';
import { arrayCompanyType } from '../../../sub-pages/contacts/test-data';
import { CardDirectory } from '../../card-directory';

type ListCardsDirectoryType = {
  array: arrayCompanyType;
  link: string;
};

export const ListCardsDirectory: FC<ListCardsDirectoryType> = ({
  array,
  link,
  ...props
}) => {
  return (
    <S.ListCardsDirectory {...props}>
      {array.map(el => (
        <S.Item key={el.id}>
          <CardDirectory
            title={el.title}
            array={el.links}
            link={link}
          />
        </S.Item>
      ))}
    </S.ListCardsDirectory>
  );
};
