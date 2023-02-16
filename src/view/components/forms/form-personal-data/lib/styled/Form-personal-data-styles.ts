import styled from 'styled-components';
import { CustomInputMask, CustomInput } from '../../../../actions/custom-input';
import { CustomButton } from '../../../../actions/custom-button';

const PersonalData = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, max-content));
  column-gap: 48px;
`;

const FormPersonalData = styled.form`
  max-width: 550px;
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: start;
  gap: 12px 24px;
  margin-bottom: 24px;
`;

const Input = styled(CustomInput)`
  height: 40px;
  font-size: 20px;
`;

const InputPhone = styled(CustomInputMask)`
  height: 40px;
  font-size: 20px;
`;

const Button = styled(CustomButton)`
  width: 250px;
  height: 55px;
  margin-left: auto;
  font-size: 18px;
  font-weight: 600;
`;

export { PersonalData, FormPersonalData, Wrap, Input, InputPhone, Button };
