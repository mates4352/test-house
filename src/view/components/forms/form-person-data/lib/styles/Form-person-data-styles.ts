import styled from 'styled-components';
import { CustomInput, CustomInputMask } from '../../../../actions/custom-input';
import { CustomButton } from '../../../../actions/custom-button';
import { Tag } from '../../../../statics/tag/lib/styles/Tag-styles';

const FormPersonData = styled.form``;

const Wrap = styled.div`
  display: grid;
  grid-auto-rows: var(--grid-min-max);
  row-gap: 16px;
  width: 100%;
  margin-bottom: 40px;
`;

const WrapInputHousing = styled.div`
  display: grid;
  grid-template-columns: 397px 82px 105px;
  align-items: start;
  column-gap: 24px;
`;

const Input = styled(CustomInput)`
  max-width: 397px;
  height: 48px;
`;

const InputPhone = styled(CustomInputMask)`
  max-width: 397px;
  height: 48px;
`;

const WrapInputCar = styled.div`
  display: grid;
  grid-template-columns: 397px 211px;
  align-items: start;
  column-gap: 24px;
`;

const TagPerson = styled(Tag)`
  margin-bottom: 16px;
`;

const WrapPhone = styled.div`
  display: grid;
  grid-auto-rows: var(--grid-min-max);
  row-gap: 16px;
  width: 100%;
  margin-bottom: 58px;
`;

const WrapButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 292px);
  align-items: start;
  column-gap: 24px;
`;

const Button = styled(CustomButton)`
  margin-top: 32px;
  height: 48px;
`;

export {
  FormPersonData,
  Wrap,
  WrapInputHousing,
  Input,
  InputPhone,
  WrapInputCar,
  TagPerson,
  WrapPhone,
  WrapButtons,
  Button,
};
