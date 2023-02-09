import React, {FC, useState} from 'react';
import {PopupAdditionalContactsStyles} from "../lib/styles/Popup-additional-contacts-styles";
import {FormAdditionalContact} from "../../../forms/form-additional-contact";

type PopupAdditionalContactsType = {
  ref: any
};

export const PopupAdditionalContacts: FC<PopupAdditionalContactsType> = React.forwardRef((props, ref: any) => {
  const {PopupAdditionalContacts, List, Item, Plus} = PopupAdditionalContactsStyles
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
    <PopupAdditionalContacts {...props} ref={ref}>
      <List>
        {arrayData.map((el: any, index: any) =>
          <Item key={index}>
            <FormAdditionalContact tel={el.tel}/>
          </Item>
        )}
      </List>

      <Plus onClick={onPushInArray}>+</Plus>
    </PopupAdditionalContacts>
  );
})
