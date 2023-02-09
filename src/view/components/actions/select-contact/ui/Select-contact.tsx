import React, {FC, useState} from 'react';
import * as S from "../lib/styles/Select-contact-styles";
import {CustomPopupAdditionalContacts} from "../../../popups/custom-popup-additional-contacts";
import {useOnClickOutside} from "../../../../../core/utils/hooks/useOnClickOutside";

type SelectContactType = {

};

export const SelectContact: FC<SelectContactType> = ({}) => {
  const [isPopup, setPopup] = useState<boolean>(false)
  const [refPopup] = useOnClickOutside(() => setPopup(false))

  const onShowPopup = () => {
    setPopup(!isPopup)
  }

  return (
    <S.SelectContact>
      <S.Button type={'button'} onClick={onShowPopup}>Дополнительные контакты</S.Button>

      {isPopup &&
        <CustomPopupAdditionalContacts ref={refPopup}/>
      }

    </S.SelectContact>
  );
};
