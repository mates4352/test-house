import React, { FC, ReactNode } from 'react';
import * as S from '../lib/styles/Wrapper-popups-styles';
import { CustomPopupDelete } from '../../../popups/custom-popup-delete';
import { useAppSelector } from '../../../../../core/utils/hooks/useAppSelector';
import { StatusPopupType } from '../../../../../core/types/global/status/status-popup-type';
import { StatusPopup } from '../../../../../core/utils/enum/status/status-popup';
import { useAppDispatch } from '../../../../../core/utils/hooks/useAppDispatch';
import { showPopup } from '../../../../../core/controller/slice/Popup-slice';

type WrapperPopupsType = {
  children: ReactNode;
};

export const WrapperPopups: FC<WrapperPopupsType> = ({
  children,
  ...props
}) => {
  const dispatch = useAppDispatch();
  const isPopup = useAppSelector(state => state.popupReducer.isPopup);

  const onClearPopup = () => {
    dispatch(showPopup(null));
  };

  const returnPopup = (value: StatusPopupType) => {
    switch (value) {
      case StatusPopup.POPUP_DELETE_MODERATION:
        return (
          <CustomPopupDelete
            title={'Удалить модератора ?'}
            text={'Какой-то текст, если это необходимо'}
            onCallbackButton={onClearPopup}
            onClearPopup={onClearPopup}
          />
        );
      case StatusPopup.POPUP_DELETE_PERSON:
        return (
          <CustomPopupDelete
            title={'Удалить Жителя ?'}
            text={'Какой-то текст, если это необходимо'}
            onCallbackButton={onClearPopup}
            onClearPopup={onClearPopup}
          />
        );
      case StatusPopup.POPUP_DELETE_STATUS:
        return (
          <CustomPopupDelete
            title={'Удалить Статус ?'}
            text={'Какой-то текст, если это необходимо'}
            onCallbackButton={onClearPopup}
            onClearPopup={onClearPopup}
          />
        );

      default:
        return '';
    }
  };

  return (
    <>
      <S.WrapperPopups {...props}>{children}</S.WrapperPopups>;
      {returnPopup(isPopup)}
    </>
  );
};
