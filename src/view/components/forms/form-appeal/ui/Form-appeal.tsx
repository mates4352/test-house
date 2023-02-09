import React, {FC} from 'react';
import {FormAppealStyles} from "../lib/styles/Form-appeal-styles";
import {FieldText} from "../../../actions/field-text";
import {useFormAppealFormik} from "../lib/hooks/useFormAppealFormik";

type FormAppealType = {

};

export const FormAppeal: FC<FormAppealType> = ({}) => {
  const {FormAppeal, Button} = FormAppealStyles
  const [formik] = useFormAppealFormik()

  return (
    <FormAppeal onSubmit={formik.handleSubmit}>
      <FieldText
        placeholder={'Обращение'}
        {...formik.getFieldProps('appeal')}
        {...formik.getFieldMeta('appeal')}
      />

      <Button
        type={'submit'}
        disabled={!(formik.isValid && formik.dirty)}>
        Отправить
      </Button>
    </FormAppeal>
  );
};
