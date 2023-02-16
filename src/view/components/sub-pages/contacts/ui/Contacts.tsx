import React, { FC, useState } from 'react';
import * as S from '../lib/styles/contacts-styles';
import { LinkCompany } from '../../../actions/link-company';
import uuid from 'react-uuid';
import { LinkMain } from '../../../../../core/utils/enum/links/link-main';
import * as G from '../../../../global-styled-components/global-styled-components';

type ContactsType = {};

export const Contacts: FC<ContactsType> = ({}) => {
  const [arrayCompany, setArrayCompany] = useState<any>([
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
  ]);

  const getArrayNews = () => {
    setArrayCompany(
      arrayCompany.concat([
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
      ]),
    );
  };

  return (
    <S.Contacts>
      <G.Container>
        <S.List>
          {arrayCompany.map((el: any, index: number) => (
            <S.Item key={index}>
              <LinkCompany
                text={el.text}
                srcImage={el.image}
                link={LinkMain.CONTACTS + `/${el.id}`}
              />
            </S.Item>
          ))}
        </S.List>

        <S.Button
          type={'button'}
          onClick={getArrayNews}>
          Загрузить еще
        </S.Button>
      </G.Container>
    </S.Contacts>
  );
};
