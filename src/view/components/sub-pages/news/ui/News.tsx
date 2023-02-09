import React, {FC} from 'react';
import * as S from "../lib/styles/News-styles";
import { Container } from '../../../../global-styled-components/global-styled-components';
import {ListNews} from "../../../statics/list-news";

type NewsType = {};

export const News: FC<NewsType> = ({}) => {

  const arrayNews = [
    {
      id: '1',
      status: 'area',
      image: '',
      previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: '1',
      status: 'area',
      image: '',
      previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: '1',
      status: 'area',
      image: '',
      previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: '1',
      status: 'area',
      image: '',
      previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: '1',
      status: 'area',
      image: '',
      previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: '1',
      status: 'area',
      image: '',
      previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

  ]

  return (
    <S.News>
      <Container>
        <S.Title>Новости</S.Title>
        <ListNews arrayNews={arrayNews}/>
      </Container>
    </S.News>
  );
};
