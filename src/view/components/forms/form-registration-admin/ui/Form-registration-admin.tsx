import React, {FC} from 'react';
import {FormRegistrationAdminStyles} from "../lib/styles/Form-registration-admin-styles";
import {useFormRegistrationAdminFormik} from "../lib/hooks/useFormRegistrationAdminFormik";
import {Input} from "../../../actions/input";

type FormRegistrationAdminType = {};

export const FormRegistrationAdmin: FC<FormRegistrationAdminType> = ({}) => {
  const {FormRegistrationAdmin, Wrap, Input, InputPhone, Button} = FormRegistrationAdminStyles
  const [formik] = useFormRegistrationAdminFormik()

  return (
    <FormRegistrationAdmin onSubmit={formik.handleSubmit}>
      <Wrap>
        <Input
          type="text"
          placeholder={'Имя'}
          {...formik.getFieldProps('firstName')}
          {...formik.getFieldMeta('firstName')}
        />

        <Input
          type="text"
          placeholder={'Фамилия'}
          {...formik.getFieldProps('lastName')}
          {...formik.getFieldMeta('lastName')}
        />

        <Input
          type="text"
          placeholder={'Отчество'}
          {...formik.getFieldProps('surname')}
          {...formik.getFieldMeta('surname')}
        />

        <Input
          type="email"
          placeholder={'Емайл'}
          {...formik.getFieldProps('email')}
          {...formik.getFieldMeta('email')}
        />

        <Input
          type="password"
          placeholder={'Пароль'}
          {...formik.getFieldProps('password')}
          {...formik.getFieldMeta('password')}
        />

        <Input
          type="password"
          placeholder={'Повторный пароль'}
          {...formik.getFieldProps('forgotPassword')}
          {...formik.getFieldMeta('forgotPassword')}
        />

        <InputPhone
          name={'phone'}
          type={'tel'}
          placeholder={'Номер телефона'}
          formik={formik}
          mask={"+7-999-999-99-99"}
        />

        <Input
          type="text"
          placeholder={'Должность'}
          {...formik.getFieldProps('position')}
          {...formik.getFieldMeta('position')}
        />

        <Input
          type="text"
          placeholder={'Район'}
          {...formik.getFieldProps('area')}
          {...formik.getFieldMeta('area')}
        />
      </Wrap>

      <Button
        type={'submit'}
        disabled={!(formik.isValid && formik.dirty)}>
        войти
      </Button>
    </FormRegistrationAdmin>
  );
};
