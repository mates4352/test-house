import React, {FC, useState} from 'react';
import * as S from "../lib/lib/styles/List-orders-styles";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";
import uuid from "react-uuid";
import {StatusOrder} from "../../../../../core/utils/enum/status/status-order";

type ListOrdersType = {};

export const ListOrders: FC<ListOrdersType> = ({}) => {
  const [arrayOrder, setArrayOrder] = useState([
    {
      id: uuid(),
      date: '2015-11-18',
      nameOrder: 'электрика',
      status: StatusOrder.SENT
    },

    {
      id: uuid(),
      date: '2016-11-18',
      nameOrder: 'электрика',
      status: StatusOrder.IN_PROCESSING
    },

    {
      id: uuid(),
      date: '2017-11-18',
      nameOrder: 'электрика',
      status: StatusOrder.ACCEPTED
    }
  ])

  const deleteOrder = (id: string) => () => {
    setArrayOrder(arrayOrder.filter(el => el.id !== id))
  }

  return (
    <S.ListOrders>
      <S.Table>
        <S.Tbody>
          <S.Tr>
            <S.Th>
              Статус
            </S.Th>

            <S.Th>
              Заявка
            </S.Th>

            <S.Th>
              Дата
            </S.Th>

            <S.Th>
            </S.Th>

            <S.Th>
            </S.Th>

            <S.Th>
            </S.Th>
          </S.Tr>
        </S.Tbody>

        <S.Thead>
          {arrayOrder.map(el =>
            <S.Tr>
              <S.Td>
                <S.Status>
                  {el.status}
                </S.Status>
              </S.Td>

              <S.Td>
                <S.Name>
                  {el.nameOrder}
                </S.Name>
              </S.Td>

              <S.Td>
                <S.Date dateTime={el.date}>
                  18 ноября 2015
                </S.Date>
              </S.Td>

              <S.Td>
                <button type={'button'}>Изменить статус</button>
              </S.Td>

              <S.Td>
                <button type={'button'} onClick={deleteOrder(el.id)}>Удалить</button>
              </S.Td>

              <S.Td>
                <S.LinkElement to={LinkMain.ORDER + `/${el.id}`}>Перейти к заявке</S.LinkElement>
              </S.Td>
            </S.Tr>
          )}
        </S.Thead>
      </S.Table>
    </S.ListOrders>
  );
};
