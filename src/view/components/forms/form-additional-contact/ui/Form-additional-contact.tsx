import React, {FC} from 'react';
import * as S from "../lib/styles/Form-additional-contact-styles";
import {useAdditionalContact} from "../lib/hooks/useAdditionalContact";

type FormAdditionalContactType = {
  tel: string
  onDeletePhone: () => void
};

export const FormAdditionalContact: FC<FormAdditionalContactType> = ({
  tel,
  onDeletePhone,
  ...props
}) => {
  const [formik, isInputPhone, onShowInput] = useAdditionalContact(tel);

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
          <S.Text onClick={onShowInput}>{tel}</S.Text>
          <S.ButtonOpenInput type={'button'} onClick={onDeletePhone}>X</S.ButtonOpenInput>
        </S.Wrap>
      }
    </S.FormAdditionalContact>
  );
};
