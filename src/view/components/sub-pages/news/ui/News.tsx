import React, {FC} from 'react';
import * as S from "../lib/styles/News-styles";
import { Container } from '../../../../global-styled-components/global-styled-components';
import {ListNews} from "../../../statics/list-news";
import uuid from "react-uuid";
import {LinkAdmin} from "../../../../../core/utils/enum/links/link-admin";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";

type NewsType = {};

export const News: FC<NewsType> = ({}) => {

  const arrayNews = [
    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

  ]

  return (
    <S.News>
      <Container>
        <S.Title>Новости</S.Title>
        <ListNews arrayNews={arrayNews} link={LinkMain.NEWS}/>
      </Container>
    </S.News>
  );
};
