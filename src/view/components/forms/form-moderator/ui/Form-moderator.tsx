import React, { FC } from 'react';
import * as S from '../lib/styles/Form-moderator-styles';
import { useFormModerator } from '../lib/hooks/useFormModerator';

type FormModeratorType = {};

export const FormModerator: FC<FormModeratorType> = ({}) => {
  const [formik] = useFormModerator();

  return (
    <S.FormModerator onSubmit={formik.handleSubmit}>
      <S.Input
        placeholder={'Фамилия'}
        {...formik.getFieldProps('firstName')}
        {...formik.getFieldMeta('firstName')}
      />

      <S.Input
        placeholder={'Имя'}
        {...formik.getFieldProps('lastName')}
        {...formik.getFieldMeta('lastName')}
      />

      <S.Input
        placeholder={'Отчество'}
        {...formik.getFieldProps('surname')}
        {...formik.getFieldMeta('surname')}
      />

      <S.Wrap>
        <S.Input
          placeholder={'Район'}
          {...formik.getFieldProps('area')}
          {...formik.getFieldMeta('area')}
        />

        <S.Input
          placeholder={'Участок'}
          {...formik.getFieldProps('position')}
          {...formik.getFieldMeta('position')}
        />
      </S.Wrap>

      <S.Input
        placeholder={'E-mail'}
        {...formik.getFieldProps('email')}
        {...formik.getFieldMeta('email')}
      />

      <S.InputPhone
        name={'phone'}
        type={'tel'}
        placeholder={'Номер телефона'}
        formik={formik}
        mask={'+7-999-999-99-99'}
      />

      <S.Button
        property={'common'}
        type={'submit'}>
        Отправить
      </S.Button>
    </S.FormModerator>
  );
};
