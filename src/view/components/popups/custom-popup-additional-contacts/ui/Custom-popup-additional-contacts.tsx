import React, {FC, useState} from 'react';
import * as S from "../lib/styles/Custom-popup-additional-contacts-styles";
import {FormAdditionalContact} from "../../../forms/form-additional-contact";

type CustomPopupAdditionalContactsType = {
  ref: any
};

export const CustomPopupAdditionalContacts: FC<CustomPopupAdditionalContactsType> = React.forwardRef((props, ref: any) => {
  const [arrayData, setArrayData] = useState([
      {
        tel: '+7-999-999-99-99'
      },

      {
        tel: '+7-999-999-99-99'
      },

      {
        tel: '+7-999-999-99-99'
      }
    ]
  )

  const onPushInArray = () => {
    setArrayData([...arrayData, {tel: '+7-999-999-99-99'}])
  }

  return (
    <S.CustomPopupAdditionalContacts {...props} ref={ref}>
      <S.List>
        {arrayData.map((el: any, index: any) =>
          <S.Item key={index}>
            <FormAdditionalContact tel={el.tel}/>
          </S.Item>
        )}
      </S.List>

      <S.Plus onClick={onPushInArray}>+</S.Plus>
    </S.CustomPopupAdditionalContacts>
  );
})
