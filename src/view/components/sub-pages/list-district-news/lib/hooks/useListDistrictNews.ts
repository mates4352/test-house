import uuid from 'react-uuid';
import { LinkResponse } from '../../../../actions/link-news/ui/Link-news';

export const useListDistrictNews = () => {
  const arrayNews: Array<LinkResponse> = [
    {
      id: uuid(),
      tag: '',
      text: 'Ликвидация граффити на улице Некрасова',
      subText: '20.03.2030',
    },

    {
      id: uuid(),
      text: 'Ввод новых автобусных маршрутов',
      subText: '21.08.2130',
    },

    {
      id: uuid(),
      text: 'Косметический ремонт парадной на Басковом переулке',
    },

    {
      id: uuid(),
      text: 'Ремонт кровли на Кирилловской улице',
    },

    {
      id: uuid(),
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

  return [arrayNews] as const;
};
