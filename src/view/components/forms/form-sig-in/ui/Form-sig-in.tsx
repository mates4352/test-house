import React, {FC} from 'react';
import * as S from "../lib/styles/Form-sig-in-styles";
import {useFormSigInFormik} from "../lib/hooks/useFormSigInFormik";

type FormSigInType = {

};

export const FormSigIn: FC<FormSigInType> = ({}) => {
  const [formik] = useFormSigInFormik();

  return (
    <S.FormSigIn onSubmit={formik.handleSubmit}>
      <S.InputPhone
        name={'phone'}
        type={'tel'}
        placeholder={'Phone'}
        formik={formik}
        mask={"+7-999-999-99-99"}
      />

      <S.Button
        type={'submit'}
        disabled={!(formik.isValid && formik.dirty)}>
        Отправить
      </S.Button>
    </S.FormSigIn>
  );
};
