import { useFormik } from 'formik';
import { ValidationPersonalDataSchema } from '../../../../../../core/utils/helpers/validates/validation-personal-data';
import { useCallback, useEffect, useState } from 'react';

export const useFormPersonalDataFormik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: 'Миксим',
      lastName: 'Красивый',
      surname: 'Николаевич',
      email: 'ddddd2005@mail.ru',
      phone: '+7-837-837-73-21',
      street: 'Морозовая',
      house: '1',
      apartment: '26',
      car: 'Лада',
      parkingSpace: 'a203',
      contacts: [''],
    },

    validationSchema: ValidationPersonalDataSchema,

    onSubmit: values => {
      console.log(values);
      formik.resetForm();
    },
  });

  const onAddInputs = () => {
    formik.setFieldValue('contacts', [...formik.values.contacts, '']);
  };

  return [formik, formik.values.contacts, onAddInputs] as const;
};
