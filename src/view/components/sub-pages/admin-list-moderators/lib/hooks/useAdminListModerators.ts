import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { arrayDataPeoplesTest } from '../../../../statics/table-orders/data';
import { arrayTestNumber, arrayTestRegion } from '../../test-data';
import { useAppDispatch } from '../../../../../../core/utils/hooks/useAppDispatch';
import { showPopup } from '../../../../../../core/controller/slice/Popup-slice';
import { StatusPopup } from '../../../../../../core/utils/enum/status/status-popup';
import { LinkAdmin } from '../../../../../../core/utils/enum/links/link-admin';
import { windowScroll } from '../../../../../../core/utils/helpers/functions/windowScroll';

export const useAdminListModerators = () => {
  windowScroll();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [arraySearchRegion, setArraySearchRegion] = useState(arrayTestRegion);
  const [arraySearchNumber, setArraySearchNumber] = useState(arrayTestNumber);
  const [arrayPeoples, setArrayPeoples] = useState(arrayDataPeoplesTest);

  const onSearchRegion = (text: string) => {
    if (text) {
      setArraySearchRegion(
        arrayTestRegion.filter(
          (el: any) =>
            el.text.slice(0, text.length).toLowerCase() === text.toLowerCase(),
        ),
      );
    } else {
      setArraySearchRegion(arrayTestRegion);
    }
  };

  const onSearchNumber = (text: string) => {
    if (text) {
      setArraySearchNumber(
        arrayTestNumber.filter(
          (el: any) =>
            el.text.slice(0, text.length).toLowerCase() === text.toLowerCase(),
        ),
      );
    } else {
      setArraySearchNumber(arrayTestNumber);
    }
  };

  const onResetCheckBox = () => {
    setArraySearchNumber(
      arraySearchNumber.map(el =>
        el.checked ? { ...el, checked: false } : el,
      ),
    );

    setArraySearchRegion(
      arraySearchRegion.map(el =>
        el.checked ? { ...el, checked: false } : el,
      ),
    );
  };

  const onCheckedInputRegion = (text: string) => {
    setArraySearchRegion(
      arraySearchRegion.map(el =>
        el.text === text ? { ...el, checked: true } : el,
      ),
    );
  };

  const onCheckedInputNumber = (text: string) => {
    setArraySearchNumber(
      arraySearchNumber.map(el =>
        el.text === text ? { ...el, checked: true } : el,
      ),
    );
  };

  const onDeleteOrder = useCallback(
    (id: string) => () => {
      dispatch(showPopup(StatusPopup.POPUP_DELETE_MODERATION));
      setArrayPeoples(arrayPeoples.filter(el => el.id !== id));
    },
    [arrayPeoples],
  );

  const onRedirect = (id: string) => () => {
    navigate(LinkAdmin.EDIT_MODERATOR + '/' + id);
  };

  return [
    arraySearchRegion,
    arraySearchNumber,
    arrayPeoples,
    onSearchRegion,
    onSearchNumber,
    onResetCheckBox,
    onCheckedInputRegion,
    onCheckedInputNumber,
    onDeleteOrder,
    onRedirect,
  ] as const;
};
