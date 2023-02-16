import styled from 'styled-components';
import { CustomInputMask, CustomInput } from '../../../../actions/custom-input';
import { CustomButton } from '../../../../actions/custom-button';

const FormRegistrationAdmin = styled.form``;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  gap: 24px;
`;

const Input = styled(CustomInput)`
  max-width: 250px;
  height: 40px;
  font-size: 20px;
`;

const InputPhone = styled(CustomInputMask)`
  max-width: 250px;
  height: 40px;
  font-size: 20px;
`;

const Button = styled(CustomButton)`
  width: 70px;
  height: 40px;
  margin: 20px auto 0 auto;
`;

export { FormRegistrationAdmin, Wrap, Input, InputPhone, Button };
