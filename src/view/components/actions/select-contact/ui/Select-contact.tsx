import React, {FC, useState} from 'react';
import {SelectContactStyles} from "../lib/styles/Select-contact-styles";
import {PopupAdditionalContacts} from "../../../popups/popup-additional-contacts";
import {useOnClickOutside} from "../../../../../core/utils/hooks/useOnClickOutside";

type SelectContactType = {

};

export const SelectContact: FC<SelectContactType> = ({}) => {
  const {SelectContact, Button} = SelectContactStyles
  const [isPopup, setPopup] = useState<boolean>(false)
  const [refPopup] = useOnClickOutside(() => setPopup(false))

  const onShowPopup = () => {
    setPopup(!isPopup)
  }

  return (
    <SelectContact>
      <Button type={'button'} onClick={onShowPopup}>Дополнительные контакты</Button>

      {isPopup &&
        <PopupAdditionalContacts ref={refPopup}/>
      }

    </SelectContact>
  );
};
