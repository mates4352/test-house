import React, {FC} from 'react';
import {FormChatStyles} from "../lib/styles/Form-chat-styles";
import {useFormChatFormik} from "../lib/hooks/userFormChatFormik";

type FormChatType = {

};

export const FormChat: FC<FormChatType> = ({}) => {
  const {FormChat, Input} = FormChatStyles
  const [formik] = useFormChatFormik();

  return (
    <FormChat onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        placeholder={'Message...'}
        {...formik.getFieldProps('message')}
        {...formik.getFieldMeta('message')}
      />
    </FormChat>
  );
};
