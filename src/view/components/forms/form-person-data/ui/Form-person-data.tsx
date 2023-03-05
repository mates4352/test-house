import React, { FC } from 'react';
import * as S from '../lib/styles/Form-person-data-styles';
import { useFormPersonData } from '../lib/hooks/useFormPersonData';

type FormPersonDataType = {};

export const FormPersonData: FC<FormPersonDataType> = ({}) => {
  const [formik] = useFormPersonData();
  return (
    <S.FormPersonData onSubmit={formik.handleSubmit}>
      <S.Wrap>
        <S.Input
          placeholder={'Фамилия'}
          {...formik.getFieldProps('firstName')}
          {...formik.getFieldMeta('firstName')}
        />

        <S.Input
          placeholder={'Имя'}
          {...formik.getFieldProps('lastName')}
          {...formik.getFieldMeta('lastName')}
        />

        <S.Input
          placeholder={'Отчество'}
          {...formik.getFieldProps('surname')}
          {...formik.getFieldMeta('surname')}
        />

        <S.WrapInputHousing>
          <S.Input
            placeholder={'Улица'}
            {...formik.getFieldProps('street')}
            {...formik.getFieldMeta('street')}
          />

          <S.Input
            placeholder={'Дом'}
            {...formik.getFieldProps('house')}
            {...formik.getFieldMeta('house')}
          />

          <S.Input
            placeholder={'Квартира'}
            {...formik.getFieldProps('apartment')}
            {...formik.getFieldMeta('apartment')}
          />
        </S.WrapInputHousing>

        <S.Input
          placeholder={'E-mail'}
          {...formik.getFieldProps('email')}
          {...formik.getFieldMeta('email')}
        />

        <S.InputPhone
          name={'phone'}
          type={'tel'}
          placeholder={'Номер телефона'}
          formik={formik}
          mask={'+7-999-999-99-99'}
        />

        <S.WrapInputCar>
          <S.Input
            placeholder={'Машина'}
            {...formik.getFieldProps('car')}
            {...formik.getFieldMeta('car')}
          />

          <S.Input
            placeholder={'Парковочное место'}
            {...formik.getFieldProps('parking_space')}
            {...formik.getFieldMeta('parking_space')}
          />
        </S.WrapInputCar>
      </S.Wrap>

      <S.TagPerson>Дополнительные контакты</S.TagPerson>

      <S.WrapPhone>
        <S.Input
          placeholder={'Контакт'}
          {...formik.getFieldProps('contacts[0]')}
          {...formik.getFieldMeta('contacts[0]')}
        />
        <S.Input
          placeholder={'Контакт'}
          {...formik.getFieldProps('contacts[1]')}
          {...formik.getFieldMeta('contacts[1]')}
        />
        <S.Input
          placeholder={'Контакт'}
          {...formik.getFieldProps('contacts[2]')}
          {...formik.getFieldMeta('contacts[2]')}
        />
      </S.WrapPhone>

      <S.WrapButtons>
        <S.Button
          property={'common'}
          type={'submit'}>
          Отправить
        </S.Button>

        <S.Button
          property={'outlined'}
          type={'button'}>
          Удалить жильца
        </S.Button>
      </S.WrapButtons>
    </S.FormPersonData>
  );
};
