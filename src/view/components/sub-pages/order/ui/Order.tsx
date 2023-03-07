import React, { FC } from 'react';
import * as S from '../lib/styles/Order-styles';
import { Chat } from '../../../statics/chat';
import * as G from '../../../../global-styled-components/global-styled-components';
import { StatusOrder } from '../../../../../core/utils/enum/status/status-order';
import { windowScroll } from '../../../../../core/utils/helpers/functions/windowScroll';
import { useAppDispatch } from '../../../../../core/utils/hooks/useAppDispatch';
import { showPopup } from '../../../../../core/controller/slice/Popup-slice';
import { StatusPopup } from '../../../../../core/utils/enum/status/status-popup';

type OrderType = {};

export const Order: FC<OrderType> = ({}) => {
  const dispath = useAppDispatch();
  const onDeleteOrder = () => {
    dispath(showPopup(StatusPopup.POPUP_DELETE_ORDER));
  };
  windowScroll();
  return (
    <S.Order>
      <S.ButtonBack />

      <S.Wrap>
        <S.Title>Обращение 13562-5618 </S.Title>
        <S.StatusQuestion status={StatusOrder.SENT} />

        <S.Text>
          Таким образом постоянное информационно-пропагандистское обеспечение
          нашей деятельности требуют определения и уточнения системы обучения
          кадров, соответствует насущным потребностям. Таким образом новая
          модель организационной деятельности требуют от нас анализа форм
          развития. С другой стороны реализация намеченных плановых заданий
          требуют от нас анализа новых предложений. Товарищи! дальнейшее
          развитие различных форм деятельности позволяет оценить значение форм
          развития. Не следует, однако забывать, что консультация с широким
          активом способствует подготовки и реализации существенных финансовых и
          административных условий. Таким образом начало повседневной работы по
          формированию позиции требуют определения и уточнения позиций,
          занимаемых участниками в отношении поставленных задач.
        </S.Text>
      </S.Wrap>
      <S.ButtonDeleteText
        property={'common'}
        type={'button'}
        onClick={onDeleteOrder}>
        Удалить обращение
      </S.ButtonDeleteText>
      <Chat />
    </S.Order>
  );
};
