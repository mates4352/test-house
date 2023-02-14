import React, {FC, useState} from "react";
import {useOnClickOutside} from "../../../../../core/utils/hooks/useOnClickOutside";
import * as S from "../lib/styles/Table-orders-styles";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";
import {StatusOrdersType} from "../../../../../core/types/global/status/status-orders-type";

type RowTableOrdersType = {
  el: any
  admin?: boolean
  onDeleteOrder: (id: string) => () => void
  onChangeStatusOrder?: (status: StatusOrdersType) => () => void
}

export const RowTableOrders: FC<RowTableOrdersType> = React.memo(({
  el,
  admin,
  onDeleteOrder,
  onChangeStatusOrder,
  ...props
}) => {
  const [isPopup, setPopup] = useState<boolean>(false)
  const onShowPopup = () => {
    setPopup(value => !value)
  }
  const [refPopup] = useOnClickOutside(onShowPopup)
  console.log('hello')
  return (
    <S.Tr {...props} status={el.status}>
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
        <S.Wrap>
          {admin &&
              <S.WrapButtons>
                  <button type={'button'} onClick={onShowPopup}>Изменить статус</button>

                {isPopup &&
                    <S.PopupEditStatus onChangeStatusOrder={onChangeStatusOrder && onChangeStatusOrder} ref={refPopup}/>
                }
              </S.WrapButtons>
          }

          <button type={'button'} onClick={onDeleteOrder(el.id)}>Удалить</button>

          <S.LinkElement to={LinkMain.ORDER + `/${el.id}`}>Перейти к заявке</S.LinkElement>
        </S.Wrap>
      </S.Td>
    </S.Tr>
  )
})
