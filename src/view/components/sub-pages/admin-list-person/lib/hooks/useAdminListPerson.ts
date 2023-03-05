import { useCallback, useState } from 'react';
import { arrayDataPeoplesTest } from '../../../../statics/table-orders/data';
import { arrayTestRegion, arrayStreet } from '../../data-test';
import { showPopup } from '../../../../../../core/controller/slice/Popup-slice';
import { StatusPopup } from '../../../../../../core/utils/enum/status/status-popup';
import { LinkAdmin } from '../../../../../../core/utils/enum/links/link-admin';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../../../core/utils/hooks/useAppDispatch';

export const useAdminListPerson = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [arraySearchRegion, setArraySearchRegion] = useState(arrayTestRegion);
  const [arraySearchStreet, setArraySearchStreet] = useState(arrayStreet);
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

  const onSearchStreet = (text: string) => {
    if (text) {
      setArraySearchStreet(
        arraySearchStreet.filter(
          (el: any) =>
            el.text.slice(0, text.length).toLowerCase() === text.toLowerCase(),
        ),
      );
    } else {
      setArraySearchStreet(arraySearchStreet);
    }
  };

  const onResetCheckBox = () => {
    setArraySearchStreet(
      arraySearchStreet.map(el =>
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

  const onCheckedInputStreet = (text: string) => {
    setArraySearchStreet(
      arraySearchStreet.map(el =>
        el.text === text ? { ...el, checked: true } : el,
      ),
    );
  };

  const onDeleteOrder = useCallback(
    (id: string) => () => {
      dispatch(showPopup(StatusPopup.POPUP_DELETE_PERSON));
      setArrayPeoples(arrayPeoples.filter(el => el.id !== id));
    },
    [arrayPeoples],
  );

  const onRedirect = (id: string) => () => {
    navigate(LinkAdmin.EDIT_PERSON + '/' + id);
  };

  return [
    arraySearchRegion,
    arraySearchStreet,
    arrayPeoples,
    onSearchRegion,
    onSearchStreet,
    onResetCheckBox,
    onCheckedInputRegion,
    onCheckedInputStreet,
    onDeleteOrder,
    onRedirect,
  ] as const;
};
