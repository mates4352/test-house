import React, { FC } from 'react';
import * as S from '../lib/styles/Form-appeal-styles';
import { FieldText } from '../../../actions/field-text';
import { useFormAppealFormik } from '../lib/hooks/useFormAppealFormik';
import { CustomInput } from '../../../actions/custom-input';

type FormAppealType = {};

export const FormAppeal: FC<FormAppealType> = ({}) => {
  const [formik] = useFormAppealFormik();

  return (
    <S.FormAppeal onSubmit={formik.handleSubmit}>
      <S.Input
        placeholder={'Тема обращения'}
        {...formik.getFieldProps('subject')}
        {...formik.getFieldMeta('subject')}
      />

      <S.Textarea
        placeholder={'Текст обращения'}
        {...formik.getFieldProps('appeal')}
        {...formik.getFieldMeta('appeal')}
      />

      <S.Button
        property={'common'}
        type={'submit'}
        disabled={!(formik.isValid && formik.dirty)}>
        Отправить
      </S.Button>
    </S.FormAppeal>
  );
};
