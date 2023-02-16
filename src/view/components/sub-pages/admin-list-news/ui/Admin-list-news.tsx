import React, { FC, useState } from 'react';
import * as S from '../lib/styles/Admin-list-news-styles';
import uuid from 'react-uuid';
import { LinkAdmin } from '../../../../../core/utils/enum/links/link-admin';

type AdminListNewsType = {};

export const AdminListNews: FC<AdminListNewsType> = ({}) => {
  const [arrayNews, setArrayNews] = useState<any>([
    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },
  ]);

  const getArrayNews = () => {
    setArrayNews(
      arrayNews.concat([
        {
          id: uuid(),
          status: 'area',
          image: '',
          previewText:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
        },

        {
          id: uuid(),
          status: 'area',
          image: '',
          previewText:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
        },

        {
          id: uuid(),
          status: 'area',
          image: '',
          previewText:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
        },
      ]),
    );
  };

  return (
    <S.AdminListNews>
      <S.List
        arrayNews={arrayNews}
        admin={true}
        link={LinkAdmin.LIST_CREATE_NEWS}
      />
      <S.Button
        type={'button'}
        onClick={getArrayNews}>
        Загрузить еще
      </S.Button>
    </S.AdminListNews>
  );
};
