import React, { FC } from 'react';
import * as S from '../lib/styles/Form-chat-styles';
import { useFormChatFormik } from '../lib/hooks/userFormChatFormik';
import { AnimationShow } from '../../../animation/AnimationShow';
import { ButtonAddFileInput } from '../../../actions/button-add-file-input';

type FormChatType = {
  onCallback: (value: string, image?: string) => void;
};

export const FormChat: FC<FormChatType> = ({ onCallback, ...props }) => {
  const [
    formik,
    ref,
    isButton,
    image,
    addFileImage,
    AnimationShowButton,
    onChangeTextarea,
    onKeyDown,
  ] = useFormChatFormik(onCallback);

  return (
    <S.FormChat
      onSubmit={formik.handleSubmit}
      {...props}>
      <S.Wrap>
        <S.Textarea
          placeholder={'Введите запрос'}
          {...formik.getFieldProps('message')}
          {...formik.getFieldMeta('message')}
          ref={ref}
          onChange={onChangeTextarea}
          onKeyDown={onKeyDown}
        />

        <S.ButtonWrap>
          <ButtonAddFileInput onCallbackInput={addFileImage} />
          <AnimationShow
            isAnimation={isButton}
            variants={AnimationShowButton}>
            <S.ButtonSend type={'submit'}>
              <S.Icon />
            </S.ButtonSend>
          </AnimationShow>
        </S.ButtonWrap>
      </S.Wrap>
    </S.FormChat>
  );
};
