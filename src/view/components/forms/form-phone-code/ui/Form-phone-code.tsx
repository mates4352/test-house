import React, {FC} from 'react';
import {FormPhoneCodeStyles} from "../lib/styles/Form-phone-code-styles";
import {useFormPhoneCodeFormik} from "../lib/hooks/useFormPhoneCodeFormik";

type FormPhoneCodeType = {

};

export const FormPhoneCode: FC<FormPhoneCodeType> = ({}) => {
  const {FormPhoneCode, InputCode, Button} = FormPhoneCodeStyles
  const [formik] = useFormPhoneCodeFormik();

  return (
    <FormPhoneCode onSubmit={formik.handleSubmit}>
      <InputCode
        type="text"
        placeholder={'Code'}
        maxLength={6}
        {...formik.getFieldProps('code')}
        {...formik.getFieldMeta('code')}
      />

      <Button
        type={'submit'}
        disabled={!(formik.isValid && formik.dirty)}>
        войти
      </Button>
    </FormPhoneCode>
  );
};
