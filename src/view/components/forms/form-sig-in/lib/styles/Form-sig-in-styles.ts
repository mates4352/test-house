import styled from 'styled-components';
import { CustomInputMask } from '../../../../actions/custom-input';
import { CustomButton } from '../../../../actions/custom-button';

const FormSigIn = styled.form``;

const InputPhone = styled(CustomInputMask)`
  width: 400px;
  height: 48px;
`;

const Button = styled(CustomButton)`
  width: 208px;
  height: 48px;
  margin: 20px auto 0 auto;
`;

export { FormSigIn, InputPhone, Button };
