import React, {FC} from 'react';
import * as S from "../lib/lib/styles/List-orders-styles";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";

type ListOrdersType = {};

export const ListOrders: FC<ListOrdersType> = ({}) => {

  return (
    <S.ListOrders>
      <S.Item>
        <S.LinkElement to={LinkMain.ORDER + '/1'}>
          <S.Order>
            <S.Status>
              Статус: не готов
            </S.Status>

            <S.Name>
              Заявка: электрика
            </S.Name>

            <S.Date dateTime={'2015-11-18'}>
              18 ноября 2015
            </S.Date>
          </S.Order>
        </S.LinkElement>
      </S.Item>

      <S.Item>
        <S.LinkElement to={LinkMain.ORDER + '/2'}>
          <S.Order>
            <S.Status>
              Статус: в разработке
            </S.Status>

            <S.Name>
              Заявка: электрика
            </S.Name>

            <S.Date dateTime={'2016-11-18'}>
              18 ноября 2016
            </S.Date>
          </S.Order>
        </S.LinkElement>
      </S.Item>

      <S.Item>
        <S.LinkElement to={LinkMain.ORDER + '/3'}>
          <S.Order>
            <S.Status>
              Статус: готов
            </S.Status>

            <S.Name>
              Заявка: электрика
            </S.Name>

            <S.Date dateTime={'2015-11-18'}>
              18 ноября 2017
            </S.Date>
          </S.Order>
        </S.LinkElement>
      </S.Item>
    </S.ListOrders>
  );
};
