import React, { FC } from 'react';
import * as S from '../lib/styles/Admin-order-chat-styles';
import { windowScroll } from '../../../../../core/utils/helpers/functions/windowScroll';
import { StatusOrdersType } from '../../../../../core/types/global/status/status-orders-type';
import { Chat } from '../../../statics/chat';

type AdminOrderChatType = {};

export const AdminOrderChat: FC<AdminOrderChatType> = ({}) => {
  windowScroll();
  const onChangeStatusOrder = (status: StatusOrdersType) => {
    console.log(status);
  };
  return (
    <S.AdminOrderChat>
      <S.Title>Обращение 13562-5618 </S.Title>

      <S.SelectStatusOrder
        title={'Статус обращения'}
        onCallbackStatus={onChangeStatusOrder}
      />

      <S.Text>
        Таким образом постоянное информационно-пропагандистское обеспечение
        нашей деятельности требуют определения и уточнения системы обучения
        кадров, соответствует насущным потребностям. Таким образом новая модель
        организационной деятельности требуют от нас анализа форм развития. С
        другой стороны реализация намеченных плановых заданий требуют от нас
        анализа новых предложений. Товарищи! дальнейшее развитие различных форм
        деятельности позволяет оценить значение форм развития. Не следует,
        однако забывать, что консультация с широким активом способствует
        подготовки и реализации существенных финансовых и административных
        условий. Таким образом начало повседневной работы по формированию
        позиции требуют определения и уточнения позиций, занимаемых участниками
        в отношении поставленных задач.
      </S.Text>

      <Chat />
    </S.AdminOrderChat>
  );
};
