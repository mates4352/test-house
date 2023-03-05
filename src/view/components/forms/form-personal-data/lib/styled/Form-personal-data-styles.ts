import styled from 'styled-components';
import { CustomInputMask, CustomInput } from '../../../../actions/custom-input';
import { CustomButton } from '../../../../actions/custom-button';
import { CustomButtonPlus } from '../../../../actions/custom-button-plus';

const PersonalData = styled.div``;

const FormPersonalData = styled.form``;

const Wrap = styled.div`
  display: grid;
  grid-auto-rows: var(--grid-min-max);
  row-gap: 16px;
  width: 100%;
  margin-bottom: 48px;
`;

const WrapInputHousing = styled.div`
  display: grid;
  grid-template-columns: 397px 82px 105px;
  align-items: start;
  column-gap: 24px;
`;

const WrapInputCar = styled.div`
  display: grid;
  grid-template-columns: 397px 211px;
  align-items: start;
  column-gap: 24px;
`;

const Input = styled(CustomInput)`
  max-width: 397px;
`;

const InputPhone = styled(CustomInputMask)`
  max-width: 397px;
`;

const ButtonAddInputs = styled(CustomButtonPlus)``;

const WrapInputsContacts = styled.div`
  display: grid;
  grid-auto-rows: var(--grid-min-max);
  row-gap: 16px;
  width: 100%;
  margin-top: 16px;
`;

const Button = styled(CustomButton)`
  margin-top: 64px;
  width: 397px;
`;

export {
  PersonalData,
  FormPersonalData,
  Wrap,
  WrapInputHousing,
  WrapInputCar,
  Input,
  InputPhone,
  ButtonAddInputs,
  WrapInputsContacts,
  Button,
};
