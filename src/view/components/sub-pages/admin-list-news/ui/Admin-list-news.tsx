import React, { FC } from 'react';
import * as S from '../lib/styles/Admin-list-news-styles';
import uuid from 'react-uuid';
import { LinkAdmin } from '../../../../../core/utils/enum/links/link-admin';
import { LinkResponse } from '../../../actions/link-news/ui/Link-news';
import image from './../../../../../assets/images/article.png';
import { useNavigate } from 'react-router-dom';

type AdminListNewsType = {};

export const AdminListNews: FC<AdminListNewsType> = ({}) => {
  const navigate = useNavigate();
  const arrayNews: Array<LinkResponse> = [
    {
      id: uuid(),
      tag: 'Черновик',
      text: 'Уборка дворовых территорий от снега и наледи на Суворовском проспекте',
    },

    {
      id: uuid(),
      tag: 'Черновик',
      text: 'Ввод новых автобусных маршрутов',
    },

    {
      id: uuid(),
      tag: '',
      image: image,
      text: 'Ликвидация граффити на улице Некрасова',
    },

    {
      id: uuid(),
      tag: '',
      text: 'Косметический ремонт парадной на Басковом переулке',
    },

    {
      id: uuid(),
      tag: '',
      text: 'Ремонт кровли на Кирилловской улице',
    },

    {
      id: uuid(),
      tag: '',
      text: 'Восстановление освещения в парадной на 9-й Советской улице',
    },

    {
      id: uuid(),
      tag: '',
      text: 'Поверка газовых счетчиков снабжения  9-й Советской улице',
    },

    {
      id: uuid(),
      tag: '',
      text: 'Дезинсекционные работы на улице Некрасова 10',
    },
  ];

  const onRedirect = () => {
    navigate(LinkAdmin.CREATE_NEWS);
  };

  return (
    <S.AdminListNews>
      <S.ButtonEditNews onCallback={onRedirect}>
        Добавить новость
      </S.ButtonEditNews>
      <S.List
        arrayNews={arrayNews}
        admin={true}
        link={LinkAdmin.CREATE_NEWS}
      />
    </S.AdminListNews>
  );
};
