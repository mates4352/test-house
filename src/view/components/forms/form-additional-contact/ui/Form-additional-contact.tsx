import React, {FC} from 'react';
import * as S from "../lib/styles/Form-additional-contact-styles";
import {useFormAdditionalContactFormik} from "../lib/hooks/useFormAdditionalContactFormik";

type FormAdditionalContactType = {
  tel: string
};

export const FormAdditionalContact: FC<FormAdditionalContactType> = ({
  tel,
  ...props
}) => {
  const [formik, isInputPhone, onShowInput] = useFormAdditionalContactFormik(tel);

  return (
    <S.FormAdditionalContact onSubmit={formik.handleSubmit} {...props}>
      {isInputPhone ?
        <S.Wrap>
          <S.InputPhone
            name={'phone'}
            type={'tel'}
            placeholder={'Phone'}
            formik={formik}
            mask={"+7-999-999-99-99"}
          />

          <S.ButtonSubmit type={'submit'}>+</S.ButtonSubmit>
        </S.Wrap>
        :
        <S.Wrap>
          <S.Text>{tel}</S.Text>
          <S.ButtonOpenInput type={'button'} onClick={onShowInput}>X</S.ButtonOpenInput>
        </S.Wrap>
      }
    </S.FormAdditionalContact>
  );
};
