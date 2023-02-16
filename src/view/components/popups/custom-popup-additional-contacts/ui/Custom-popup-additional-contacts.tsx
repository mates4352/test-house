import React, { FC, useState } from 'react';
import * as S from '../lib/styles/Custom-popup-additional-contacts-styles';
import { FormAdditionalContact } from '../../../forms/form-additional-contact';
import uuid from 'react-uuid';

type CustomPopupAdditionalContactsType = {
  ref: any;
};

export const CustomPopupAdditionalContacts: FC<CustomPopupAdditionalContactsType> =
  React.forwardRef((props, ref: any) => {
    const [arrayData, setArrayData] = useState([
      {
        id: uuid(),
        tel: '+7-999-999-99-99',
      },

      {
        id: uuid(),
        tel: '+7-999-999-99-99',
      },

      {
        id: uuid(),
        tel: '+7-999-999-99-99',
      },
    ]);

    const onPushInArray = () => {
      setArrayData([...arrayData, { tel: '+7-999-999-99-99', id: uuid() }]);
    };

    const onDeletePhone = (id: string) => () => {
      setArrayData(arrayData.filter(el => el.id !== id));
    };

    return (
      <S.CustomPopupAdditionalContacts
        {...props}
        ref={ref}>
        <S.List>
          {arrayData.map((el: any) => (
            <S.Item key={el.id}>
              <FormAdditionalContact
                tel={el.tel}
                onDeletePhone={onDeletePhone(el.id)}
              />
            </S.Item>
          ))}
        </S.List>

        <S.Plus onClick={onPushInArray}>+</S.Plus>
      </S.CustomPopupAdditionalContacts>
    );
  });
