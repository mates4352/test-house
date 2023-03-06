import React, { FC } from 'react';
import * as S from '../lib/styled/Form-personal-data-styles';
import { useFormPersonalDataFormik } from '../lib/hooks/useFormPersonalDataFormik';

type FormPersonalDataType = {};

export const FormPersonalData: FC<FormPersonalDataType> = ({}) => {
  const [formik, arrayContacts, onAddInputs] = useFormPersonalDataFormik();

  return (
    <S.PersonalData>
      <S.FormPersonalData onSubmit={formik.handleSubmit}>
        <S.Wrap>
          <S.Input
            type="text"
            placeholder={'Имя'}
            disabled={true}
            {...formik.getFieldProps('firstName')}
            {...formik.getFieldMeta('firstName')}
          />
          <S.Input
            type="text"
            placeholder={'Фамилия'}
            disabled={true}
            {...formik.getFieldProps('lastName')}
            {...formik.getFieldMeta('lastName')}
          />
          <S.Input
            type="text"
            placeholder={'Отчество'}
            disabled={true}
            {...formik.getFieldProps('surname')}
            {...formik.getFieldMeta('surname')}
          />
          <S.WrapInputHousing>
            <S.Input
              type="text"
              placeholder={'Улица'}
              disabled={true}
              {...formik.getFieldProps('street')}
              {...formik.getFieldMeta('street')}
            />
            <S.Input
              type="text"
              placeholder={'Дом'}
              disabled={true}
              {...formik.getFieldProps('house')}
              {...formik.getFieldMeta('house')}
            />
            <S.Input
              type="text"
              placeholder={'Квартира'}
              disabled={true}
              {...formik.getFieldProps('apartment')}
              {...formik.getFieldMeta('apartment')}
            />
          </S.WrapInputHousing>

          <S.Input
            type="email"
            placeholder={'Емайл'}
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
              type="text"
              placeholder={'Машина'}
              disabled={true}
              {...formik.getFieldProps('car')}
              {...formik.getFieldMeta('car')}
            />
            <S.Input
              type="text"
              placeholder={'Парковочное место'}
              disabled={true}
              {...formik.getFieldProps('parkingSpace')}
              {...formik.getFieldMeta('parkingSpace')}
            />
          </S.WrapInputCar>
        </S.Wrap>

        <S.ButtonAddInputs onCallback={onAddInputs}>
          Дополнительные контакты
        </S.ButtonAddInputs>

        {arrayContacts && (
          <S.WrapInputsContacts>
            {arrayContacts.map((el, index) => {
              return (
                <S.Input
                  key={index}
                  type="text"
                  placeholder={'Контакт'}
                  {...formik.getFieldProps(`contacts[${index}]`)}
                  {...formik.getFieldMeta(`contacts[${index}]`)}
                />
              );
            })}
          </S.WrapInputsContacts>
        )}

        <S.Button
          property={'common'}
          type={'submit'}>
          Сохранить изменения
        </S.Button>
      </S.FormPersonalData>
    </S.PersonalData>
  );
};
