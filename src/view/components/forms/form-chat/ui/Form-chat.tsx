import React, { FC } from 'react';
import * as S from '../lib/styles/Form-chat-styles';
import { useFormChatFormik } from '../lib/hooks/userFormChatFormik';

type FormChatType = {};

export const FormChat: FC<FormChatType> = ({}) => {
  const [formik] = useFormChatFormik();

  return (
    <S.FormChat onSubmit={formik.handleSubmit}>
      <S.Input
        type="text"
        placeholder={'Message...'}
        {...formik.getFieldProps('message')}
        {...formik.getFieldMeta('message')}
      />
    </S.FormChat>
  );
};
