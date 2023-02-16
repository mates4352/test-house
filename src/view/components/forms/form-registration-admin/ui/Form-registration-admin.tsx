import React, { FC } from 'react';
import * as S from '../lib/styles/Form-registration-admin-styles';
import { useFormRegistrationAdminFormik } from '../lib/hooks/useFormRegistrationAdminFormik';

type FormRegistrationAdminType = {};

export const FormRegistrationAdmin: FC<FormRegistrationAdminType> = ({}) => {
  const [formik] = useFormRegistrationAdminFormik();

  return (
    <S.FormRegistrationAdmin onSubmit={formik.handleSubmit}>
      <S.Wrap>
        <S.Input
          type="text"
          placeholder={'Имя'}
          {...formik.getFieldProps('firstName')}
          {...formik.getFieldMeta('firstName')}
        />

        <S.Input
          type="text"
          placeholder={'Фамилия'}
          {...formik.getFieldProps('lastName')}
          {...formik.getFieldMeta('lastName')}
        />

        <S.Input
          type="text"
          placeholder={'Отчество'}
          {...formik.getFieldProps('surname')}
          {...formik.getFieldMeta('surname')}
        />

        <S.Input
          type="email"
          placeholder={'Емайл'}
          {...formik.getFieldProps('email')}
          {...formik.getFieldMeta('email')}
        />

        <S.Input
          type="password"
          placeholder={'Пароль'}
          {...formik.getFieldProps('password')}
          {...formik.getFieldMeta('password')}
        />

        <S.Input
          type="password"
          placeholder={'Повторный пароль'}
          {...formik.getFieldProps('forgotPassword')}
          {...formik.getFieldMeta('forgotPassword')}
        />

        <S.InputPhone
          name={'phone'}
          type={'tel'}
          placeholder={'Номер телефона'}
          formik={formik}
          mask={'+7-999-999-99-99'}
        />

        <S.Input
          type="text"
          placeholder={'Должность'}
          {...formik.getFieldProps('position')}
          {...formik.getFieldMeta('position')}
        />

        <S.Input
          type="text"
          placeholder={'Район'}
          {...formik.getFieldProps('area')}
          {...formik.getFieldMeta('area')}
        />
      </S.Wrap>

      <S.Button
        type={'submit'}
        disabled={!(formik.isValid && formik.dirty)}>
        войти
      </S.Button>
    </S.FormRegistrationAdmin>
  );
};
