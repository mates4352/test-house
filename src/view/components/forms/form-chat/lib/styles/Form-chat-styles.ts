import styled from 'styled-components';
import { CustomInput } from '../../../../actions/custom-input';

const FormChat = styled.form``;

const Input = styled(CustomInput)`
  width: 100%;
  height: 50px;
  font-size: 20px;
  border: none;
  box-shadow: 0 0 3px #a8a8a8;
  border-radius: unset;
`;

export { FormChat, Input };
