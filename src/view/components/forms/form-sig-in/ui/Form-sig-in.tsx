import React, {FC} from 'react';
import {FormSigInStyles} from "../lib/styles/Form-sig-in-styles";
import {useFormSigInFormik} from "../lib/hooks/useFormSigInFormik";
import {Button} from "../../../actions/button";

type FormSigInType = {

};

export const FormSigIn: FC<FormSigInType> = ({}) => {
  const {FormSigIn, InputPhone, Button} = FormSigInStyles
  const [formik] = useFormSigInFormik();

  return (
    <FormSigIn onSubmit={formik.handleSubmit}>
      <InputPhone
        name={'phone'}
        type={'tel'}
        placeholder={'Phone'}
        formik={formik}
        mask={"+7-999-999-99-99"}
      />

      <Button
        type={'submit'}
        disabled={!(formik.isValid && formik.dirty)}>
        Отправить
      </Button>
    </FormSigIn>
  );
};
