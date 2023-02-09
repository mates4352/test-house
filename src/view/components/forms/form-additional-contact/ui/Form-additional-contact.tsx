import React, {FC} from 'react';
import {FormAdditionalContactStyles} from "../lib/styles/Form-additional-contact-styles";
import {useFormAdditionalContactFormik} from "../lib/hooks/useFormAdditionalContactFormik";

type FormAdditionalContactType = {
  tel: string
};

export const FormAdditionalContact: FC<FormAdditionalContactType> = ({
  tel,
  ...props
}) => {
  const {FormAdditionalContact, Wrap, Text, ButtonOpenInput, InputPhone, ButtonSubmit} = FormAdditionalContactStyles
  const [formik, isInputPhone, onShowInput] = useFormAdditionalContactFormik(tel);

  return (
    <FormAdditionalContact onSubmit={formik.handleSubmit} {...props}>
      {isInputPhone ?
        <Wrap>
          <InputPhone
            name={'phone'}
            type={'tel'}
            placeholder={'Phone'}
            formik={formik}
            mask={"+7-999-999-99-99"}
          />

          <ButtonSubmit type={'submit'}>+</ButtonSubmit>
        </Wrap>
        :
        <Wrap>
          <Text>{tel}</Text>
          <ButtonOpenInput type={'button'} onClick={onShowInput}>X</ButtonOpenInput>
        </Wrap>
      }
    </FormAdditionalContact>
  );
};
