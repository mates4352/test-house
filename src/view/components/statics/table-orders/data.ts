import { StatusOrder } from '../../../../core/utils/enum/status/status-order';
import uuid from 'react-uuid';

export const arrayDataOrdersTest = [
  {
    id: '13562-5618',
    name: 'электрика',
    date: '2015-11-18',
    status: StatusOrder.SENT,
  },

  {
    id: '13562-5619',
    date: '2016-11-18',
    name: 'электрика',
    status: StatusOrder.IN_PROCESSING,
  },

  {
    id: '13562-56120',
    date: '2017-11-18',
    name: 'электрика',
    status: StatusOrder.DONE,
  },

  {
    id: '13562-5621',
    name: 'электрика',
    date: '2015-11-18',
    status: StatusOrder.SENT,
  },

  {
    id: '13562-5622',
    date: '2016-11-18',
    name: 'электрика',
    status: StatusOrder.IN_PROCESSING,
  },

  {
    id: '13562-56123',
    date: '2017-11-18',
    name: 'электрика',
    status: StatusOrder.DONE,
  },
];

export const arrayDataPeoplesTest = [
  {
    id: uuid(),
    name: 'Андреев Акакий Петрович',
    ragion: 'Невский',
    numberStreet: 'Участок 5',
  },

  {
    id: uuid(),
    name: 'Борисов Максим Алексеевич',
    ragion: 'Адмиралтейский',
    numberStreet: 'Участок 6',
  },

  {
    id: uuid(),
    name: 'Власов Андрей Иванович',
    ragion: 'Выборгский',
    numberStreet: 'Участок 7',
  },

  {
    id: uuid(),
    name: 'Григорян Марианна Бедросовна',
    ragion: 'Кировский',
    numberStreet: 'Участок 8',
  },

  {
    id: uuid(),
    name: 'Дягелев Григорий Михайлович',
    ragion: 'Василеостровкий',
    numberStreet: 'Участок 9',
  },

  {
    id: uuid(),
    name: 'Егорова Ирина Владимировна',
    ragion: 'Красногвардейский',
    numberStreet: 'Участок 10',
  },
];
