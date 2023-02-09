import React, {FC} from 'react';
import * as S from "../lib/styled/Form-personal-data-styles";
import {useFormPersonalDataFormik} from "../lib/hooks/useFormPersonalDataFormik";
import {WrapperInputLabel} from "../../../wrappers/wrapper-input-label";
import {SelectContact} from "../../../actions/select-contact";

type FormPersonalDataType = {

};

export const FormPersonalData: FC<FormPersonalDataType> = ({}) => {
  const [formik] = useFormPersonalDataFormik()

  return (
    <S.PersonalData>
      <S.FormPersonalData onSubmit={formik.handleSubmit}>
        <S.Wrap>
          <WrapperInputLabel label={'Имя'}>
            <S.Input
              type="text"
              placeholder={'Имя'}
              disabled={true}
              {...formik.getFieldProps('firstName')}
              {...formik.getFieldMeta('firstName')}
            />
          </WrapperInputLabel>

          <WrapperInputLabel label={'Фамилия'}>
            <S.Input
              type="text"
              placeholder={'Фамилия'}
              disabled={true}
              {...formik.getFieldProps('lastName')}
              {...formik.getFieldMeta('lastName')}
            />
          </WrapperInputLabel>

          <WrapperInputLabel label={'Отчество'}>
            <S.Input
              type="text"
              placeholder={'Отчество'}
              disabled={true}
              {...formik.getFieldProps('surname')}
              {...formik.getFieldMeta('surname')}
            />
          </WrapperInputLabel>

          <WrapperInputLabel label={'Улица'}>
            <S.Input
              type="text"
              placeholder={'Улица'}
              disabled={true}
              {...formik.getFieldProps('street')}
              {...formik.getFieldMeta('street')}
            />
          </WrapperInputLabel>

          <WrapperInputLabel label={'Дом'}>
            <S.Input
              type="text"
              placeholder={'Дом'}
              disabled={true}
              {...formik.getFieldProps('house')}
              {...formik.getFieldMeta('house')}
            />
          </WrapperInputLabel>

          <WrapperInputLabel label={'Квартира'}>
            <S.Input
              type="text"
              placeholder={'Квартира'}
              disabled={true}
              {...formik.getFieldProps('apartment')}
              {...formik.getFieldMeta('apartment')}
            />

          </WrapperInputLabel>

          <WrapperInputLabel label={'Емайл'}>
            <S.Input
              type="email"
              placeholder={'Емайл'}
              {...formik.getFieldProps('email')}
              {...formik.getFieldMeta('email')}
            />
          </WrapperInputLabel>

          <WrapperInputLabel label={'Номер телефона'}>
            <S.InputPhone
              name={'phone'}
              type={'tel'}
              placeholder={'Номер телефона'}
              formik={formik}
              mask={"+7-999-999-99-99"}
            />
          </WrapperInputLabel>

          <WrapperInputLabel label={'Машина'}>
            <S.Input
              type="text"
              placeholder={'Машина'}
              disabled={true}
              {...formik.getFieldProps('car')}
              {...formik.getFieldMeta('car')}
            />
          </WrapperInputLabel>

          <WrapperInputLabel label={'Парковочное место'}>
            <S.Input
              type="text"
              placeholder={'Парковочное место'}
              disabled={true}
              {...formik.getFieldProps('parkingSpace')}
              {...formik.getFieldMeta('parkingSpace')}
            />
          </WrapperInputLabel>
        </S.Wrap>


        <S.Button
          type={'submit'}
          disabled={!formik.isValid}>
          Сохранить изменения
        </S.Button>
      </S.FormPersonalData>

      <SelectContact/>
    </S.PersonalData>
  );
};
