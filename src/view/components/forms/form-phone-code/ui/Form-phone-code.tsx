import React, { FC } from 'react';
import * as S from '../lib/styles/Form-phone-code-styles';
import { useFormPhoneCodeFormik } from '../lib/hooks/useFormPhoneCodeFormik';

type FormPhoneCodeType = {};

export const FormPhoneCode: FC<FormPhoneCodeType> = ({}) => {
  const [formik] = useFormPhoneCodeFormik();

  return (
    <S.FormPhoneCode onSubmit={formik.handleSubmit}>
      <S.InputCode
        type="text"
        placeholder={'Введите код из СМС'}
        maxLength={6}
        {...formik.getFieldProps('code')}
        {...formik.getFieldMeta('code')}
      />

      <S.Button
        type={'submit'}
        property={'common'}
        disabled={!(formik.isValid && formik.dirty)}>
        войти
      </S.Button>
    </S.FormPhoneCode>
  );
};
