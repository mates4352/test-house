import React, { FC } from 'react';
import * as S from '../lib/styles/Admin-create-news-styles';
import { AddTitle } from '../../../actions/add-title';

type AdminCreateNewsType = {};

export const AdminCreateNews: FC<AdminCreateNewsType> = ({}) => {
  return (
    <S.AdminCreateNews>
      <S.ButtonBack />

      <S.Wrap>
        <S.AddImageBig
          textButton={'Поменять обложку'}
          textButtonDeleteImage={'Удалить обложку'}
        />
        <S.AddImageSmall
          textButton={'Поменять превью'}
          textButtonDeleteImage={'Удалить превью'}
        />
      </S.Wrap>

      <S.ChangeTitle
        placeholder={'Напишите заголовок статьи'}
        onCallback={(value: string) => console.log(value)}
      />

      <S.ChangeText
        placeholder={'дата/или тег'}
        onCallback={(value: string) => console.log(value)}
      />

      <S.ChangeText
        placeholder={'Добавить текст'}
        onCallback={(value: string) => console.log(value)}
      />

      <S.WrapButtons>
        <S.Button property={'outlined'}>Сохранить черновик</S.Button>
        <S.Button property={'common'}>Публикация</S.Button>
      </S.WrapButtons>
    </S.AdminCreateNews>
  );
};
