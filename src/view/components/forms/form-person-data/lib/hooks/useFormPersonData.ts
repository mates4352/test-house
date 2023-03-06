import { useFormik } from 'formik';
import { ValidationFormPersonData } from '../../../../../../core/utils/helpers/validates/validation-form-person-data';
import { useAppDispatch } from '../../../../../../core/utils/hooks/useAppDispatch';
import { showPopup } from '../../../../../../core/controller/slice/Popup-slice';
import { StatusPopup } from '../../../../../../core/utils/enum/status/status-popup';

export const useFormPersonData = () => {
  const dispath = useAppDispatch();

  const array = ['', '', ''];

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      surname: '',
      street: '',
      house: '',
      apartment: '',
      email: '',
      phone: '',
      car: '',
      parking_space: '',
      contacts: array,
    },

    validationSchema: ValidationFormPersonData,

    onSubmit: values => {
      console.log(values);
      formik.resetForm();
    },
  });

  const onDeletePerson = () => {
    dispath(showPopup(StatusPopup.POPUP_DELETE_PERSON));
  };

  return [formik, onDeletePerson] as const;
};
