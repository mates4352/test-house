import styled from 'styled-components';
import { CustomInput } from '../../../../actions/custom-input';
import { CustomButton } from '../../../../actions/custom-button';

const FormPhoneCode = styled.form``;

const InputCode = styled(CustomInput)`
  width: 400px;
  height: 48px;
`;

const Button = styled(CustomButton)`
  width: 208px;
  height: 48px;
  margin: 20px auto 0 auto;
`;

export { FormPhoneCode, InputCode, Button };
