import React, { FC } from 'react';
import * as S from '../lib/styles/Form-chat-styles';
import { useFormChatFormik } from '../lib/hooks/userFormChatFormik';

type FormChatType = {
  onCallback: (value: string) => void;
};

export const FormChat: FC<FormChatType> = ({ onCallback, ...props }) => {
  const [formik, ref, onChangeTextarea] = useFormChatFormik(onCallback);

  return (
    <S.FormChat
      onSubmit={formik.handleSubmit}
      {...props}>
      <S.Wrap>
        <S.Textarea
          placeholder={'Message...'}
          {...formik.getFieldProps('message')}
          {...formik.getFieldMeta('message')}
          ref={ref}
          onChange={onChangeTextarea}
        />

        <S.ButtonSend type={'submit'}>
          <S.Icon />
        </S.ButtonSend>
      </S.Wrap>
    </S.FormChat>
  );
};
