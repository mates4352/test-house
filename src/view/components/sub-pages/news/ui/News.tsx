import React, {FC, useState} from 'react';
import * as S from "../lib/styles/News-styles";
import * as G from '../../../../global-styled-components/global-styled-components';
import uuid from "react-uuid";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";

type NewsType = {};

export const News: FC<NewsType> = ({}) => {
  const [arrayNews, setArrayNews] = useState<any>(
    [
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
  )

  const getArrayNews = () => {
    setArrayNews(arrayNews.concat([
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
    ]))
  }


  return (
    <S.News>
      <G.Container>
        <S.Title>Новости</S.Title>
        <S.List arrayNews={arrayNews} link={LinkMain.NEWS}/>
        <S.Button type={'button'} onClick={getArrayNews}>Загрузить еще</S.Button>
      </G.Container>
    </S.News>
  );
};
